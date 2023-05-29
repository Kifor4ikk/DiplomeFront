import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../services/api.service";
import {take} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private router: Router) {
  }


  goTo(param: string) {
    this.router.navigate([param])

  }

}
