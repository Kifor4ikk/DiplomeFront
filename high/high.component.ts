import { Component } from '@angular/core';
import {Abonent, ApiService, Card} from "../services/api.service";
import {FormControl, FormGroup} from "@angular/forms";
import {take} from "rxjs";

@Component({
  selector: 'app-high',
  templateUrl: './high.component.html',
  styleUrls: ['./high.component.scss']
})
export class HighComponent {

  constructor(readonly apiService: ApiService) {
  }

  //ABONENT
  abonentExpanded = false;
  abonentCreateExpanded = false;
  abonentGetExpanded = false;
  abonentUpdateExpanded = false;

  abonentExpandToggle(): void {
    this.abonentExpanded = !this.abonentExpanded
  }

  abonentCreateExpandToggle(): void {
    this.abonentCreateExpanded = !this.abonentCreateExpanded
  }

  abonentGetExpandToggle(): void {
    this.abonentGetExpanded = !this.abonentGetExpanded
  }

  abonentUpdateExpandToggle(): void {
    this.abonentUpdateExpanded = !this.abonentUpdateExpanded
  }

  abonentCreateForm = new FormGroup({
    login: new FormControl(""),
    password: new FormControl(""),
    firstName: new FormControl(""),
    secondName: new FormControl(""),
    thirdName: new FormControl(""),
    phoneNumber: new FormControl(""),
    age: new FormControl(1),
    note: new FormControl(""),
  });

  abonentGetForm = new FormGroup({
    id: new FormControl(1)
  })

  abonentUpdateForm = new FormGroup({
    id: new FormControl(1),
    password: new FormControl("password"),
    firstName: new FormControl("Name"),
    secondName: new FormControl("secName"),
    thirdName: new FormControl("thirdName"),
    phoneNumber: new FormControl("phoneNumber"),
    age: new FormControl(158),
    note: new FormControl("Notes"),
  })

  abonentCreate() {
    if (this.abonentCreateForm.controls.login.value != null &&
      this.abonentCreateForm.controls.password.value != null &&
      this.abonentCreateForm.controls.firstName.value != null &&
      this.abonentCreateForm.controls.secondName.value != null &&
      this.abonentCreateForm.controls.thirdName.value != null &&
      this.abonentCreateForm.controls.age.value != null &&
      this.abonentCreateForm.controls.phoneNumber.value != null &&
      this.abonentCreateForm.controls.note.value != null
    ) {

      this.apiService.createAbonent("hard",
        new Abonent(
          0,
          this.abonentCreateForm.controls.login.value,
          this.abonentCreateForm.controls.password.value,
          this.abonentCreateForm.controls.firstName.value,
          this.abonentCreateForm.controls.secondName.value,
          this.abonentCreateForm.controls.thirdName.value,
          this.abonentCreateForm.controls.age.value,
          this.abonentCreateForm.controls.phoneNumber.value,
          this.abonentCreateForm.controls.note.value,
          [],
          []
        )
      ).pipe(take(1)).subscribe(e => alert(
        alert(JSON.stringify(e))
      ))

    } else
      alert("Wrong data. All fields are required!")
  }

  abonentGet() {
    if (this.abonentGetForm.controls.id.value != null) {
      this.apiService.getAbonent("hard", this.abonentGetForm.controls.id.value)
        .pipe(take(1)).subscribe(e =>
        alert(JSON.stringify(e))
      )
    }
  }

  abonentUpdate() {
    if (
      this.abonentUpdateForm.controls.password.value != null &&
      this.abonentUpdateForm.controls.id.value != null &&
      this.abonentUpdateForm.controls.firstName.value != null &&
      this.abonentUpdateForm.controls.secondName.value != null &&
      this.abonentUpdateForm.controls.thirdName.value != null &&
      this.abonentUpdateForm.controls.age.value != null &&
      this.abonentUpdateForm.controls.phoneNumber.value != null &&
      this.abonentUpdateForm.controls.note.value != null
    ) {

      this.apiService.updateAbonent("hard",
        new Abonent(
          this.abonentUpdateForm.controls.id.value,
          "",
          this.abonentUpdateForm.controls.password.value,
          this.abonentUpdateForm.controls.firstName.value,
          this.abonentUpdateForm.controls.secondName.value,
          this.abonentUpdateForm.controls.thirdName.value,
          this.abonentUpdateForm.controls.age.value,
          this.abonentUpdateForm.controls.phoneNumber.value,
          this.abonentUpdateForm.controls.note.value,
          [],
          []
        )
      );
    }

  }

  //CARD
  cardExpanded = false;
  cardCreateExpanded = false;
  cardGetExpanded = false;
  cardUpdateExpanded = false;

  cardExpandToggle(): void {
    this.cardExpanded = !this.cardExpanded
  }

  cardCreateExpandToggle(): void {
    this.cardCreateExpanded = !this.cardCreateExpanded
  }

  cardGetExpandToggle(): void {
    this.cardGetExpanded = !this.cardGetExpanded
  }

  cardUpdateExpandToggle(): void {
    this.cardUpdateExpanded = !this.cardUpdateExpanded
  }


  cardCreateForm = new FormGroup(
    {
      accountID: new FormControl(1),
      cardNumber: new FormControl(""),
      expiredDate: new FormControl(Date),
      cvv: new FormControl(123),
      cardPassword: new FormControl(1234),
    }
  )

  cardGetForm = new FormGroup(
    {
      id: new FormControl(1)
    }
  )

  cardUpdateForm = new FormGroup(
    {
      id: new FormControl(1),
      expiredDate: new FormControl(Date.now()),
    }
  )

  cardCreate() {
    if (
      this.cardCreateForm.controls.accountID.value != null &&
      this.cardCreateForm.controls.cardNumber.value != null &&
      this.cardCreateForm.controls.cardPassword.value != null &&
      this.cardCreateForm.controls.cvv.value != null &&
      this.cardCreateForm.controls.expiredDate.value != null
    )
      this.apiService.createCard("hard", new Card(
          0,
          this.cardCreateForm.controls.accountID.value,
          this.cardCreateForm.controls.expiredDate.value,
          this.cardCreateForm.controls.cvv.value,
          this.cardCreateForm.controls.cardNumber.value,
          this.cardCreateForm.controls.cardPassword.value,
        )
      )
  }

  cardGet() {

    if (this.cardGetForm.controls.id.value != null)

      this.apiService.getCard("hard", this.cardGetForm.controls.id.value)
        .pipe(take(1)).subscribe(e =>
        alert(JSON.stringify(e))
      )
  }
}
