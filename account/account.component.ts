import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Account, ApiService} from "../services/api.service";
import {take} from "rxjs";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  expanded = false;
  createExpanded = false;
  getExpanded = false;

  constructor(readonly apiService: ApiService) {
  }

  expandedToggle(): void {
    this.expanded = !this.expanded;
  }

  createExpandedToggle(): void {
    this.createExpanded = !this.createExpanded;
  }

  getExpandedToggle(): void {
    this.getExpanded = !this.getExpanded;
  }

  accountCreateForm = new FormGroup({
    abonentId: new FormControl(1),
    currencyCode: new FormControl("TTT")
  });

  accountGetForm = new FormGroup({
    abonentId: new FormControl(1),
    result: new FormControl("")
  });

  createAccount(): void {

    if (
      this.accountCreateForm.controls.abonentId.value != null &&
      this.accountCreateForm.controls.currencyCode.value != null
    )
      this.apiService.createAccount(new Account(
          this.accountCreateForm.controls.abonentId.value,
          this.accountCreateForm.controls.currencyCode.value,
        0
        )
      ).pipe(take(1)).subscribe(e => {
        alert(e)
      })
  }

  getAccount(): void {
    if (this.accountGetForm.controls.abonentId.value != null)
      this.apiService.getAccount(this.accountGetForm.controls.abonentId.value)
        .pipe(take(1))
        .subscribe(
          e =>
            alert(`|Account|\nValue:${e.value}\nCode: (${e.currencyCode})`)
        );
  }
}


