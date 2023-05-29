import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {compareNumbers} from "@angular/compiler-cli/src/version_helpers";
import {Observable} from "rxjs";

export interface IResp {
  code: string
  amount: number
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(readonly httpService: HttpClient) {

  }

  //Exchange requests
  public getExchange(code: string): Observable<IResp> {
    return this.httpService.get<IResp>(`api/exchange/${code}`)
  }

  //Account
  public createAccount(account: Account) {
    return this.httpService.post(`api/account/`, account)
  }

  public getAccount(id: number): Observable<Account> {
    return this.httpService.get<Account>(`api/account/${id}`)
  }

  //Abonent requests
  public createAbonent(security: string, abonent: Abonent) {
    return this.httpService.post<Abonent>(`api/${security}/abonent/`, abonent)
  }

  public getAbonent(security: string, id: number) {
    return this.httpService.get<Abonent>(`api/${security}/abonent/${id}`)
  }

  public updateAbonent(security: string, abonent: Abonent) {
    return this.httpService.put<Abonent>(`api/${security}/abonent/`, abonent)
  }

  //Card requests
  public createCard(security: string, card: Card) {
    return this.httpService.post<Card>(`api/${security}/card/`, card)
  }

  public getCard(security: string, id: number) {
    return this.httpService.get<Card>(`api/${security}/card/${id}`)
  }

  public updateCard(security: string, card: Card) {
    return this.httpService.put<Card>(`api/${security}/card/`, card)
  }

}

export class Abonent {
  constructor(
    public id: number,
    public login: string,
    public password: string,
    public firstName: string,
    public secondName: string,
    public thirdName: string,
    public age: number,
    public phoneNumber: string,
    public note: string,
    public accounts: Account[],
    public cards: Card[],
  ) {
  }

  public toString(): string {
    return "{\n" +
      "login: " + this.login +
      ",\npassword: " + this.password +
      ",\nfirstName: " + this.firstName +
      ",\nsecondName: " + this.secondName +
      ",\nthirdName: " + this.thirdName +
      ",\nphoneNumber: " + this.phoneNumber +
      ",\nage: " + this.age +
      ",\nnote: " + this.note +
      ",\naccounts: [" + this.accounts + "]" +
      ",\ncards: [" + this.cards + "]" +
      +"\n}";
  }
}

export class Account {
  constructor(
    public abonentId: number,
    public currencyCode: string,
    public value: number
  ) {

  }

  // @ts-ignore
  public toString(): string {
    return "{" +
      " abonentId: " + this.abonentId +
      " currencyCode: " + this.currencyCode +
      "value: " + this.value + "}"
  }
}

export class Card {
  constructor(
    private id: number,
    private accountId: number,
    private expired_date: DateConstructor,
    private cvv: number,
    private cardNumber: string,
    private cardPassword: number
  ) {
  }

  public toString(): string {
    return "{" +
      "id: " + this.id  +
      "accountId: " + this.accountId  +
      "expiredDate: " + this.expired_date  +
      "cardNumber: " + this.cardNumber +
      "cvv: " + this.cvv +
      "cardPassword: " + this.cardPassword +
    "}"
  }

}

