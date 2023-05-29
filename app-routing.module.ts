import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MidComponent} from "./mid/mid.component";
import {HighComponent} from "./high/high.component";
import {LowComponent} from "./low/low.component";


const routes: Routes = [
  { path: 'mid', component: MidComponent },
  { path: 'high', component: HighComponent },
  { path: 'low', component: LowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
