import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../services/api.service";
import {take} from "rxjs";

@Component({
  selector: 'app-exchangeg',
  templateUrl: './exchangeg.component.html',
  styleUrls: ['./exchangeg.component.scss']
})
export class ExchangegComponent {
  exchangeGetExpanded = false;

  constructor(readonly apiService: ApiService) {}

  exchangeGetExpand(): void {
    this.exchangeGetExpanded = !this.exchangeGetExpanded
  }

  getExchangeCode = new FormGroup({
    exchangeCodeGet: new FormControl("TTT"),
  });


  getExchange() {
    this.apiService.getExchange(this.getExchangeCode.controls.exchangeCodeGet.value as string)
      .pipe(take(1)).subscribe(e =>
    {
      alert(`${e.amount}(BYN) к 1 (${e.code})`);
    })
  }
}
//   "age": 0,
//   "note": "string",
//   "phoneNumber": "string",
