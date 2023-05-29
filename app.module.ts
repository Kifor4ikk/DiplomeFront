import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiButtonModule,
  TuiExpandModule
} from "@taiga-ui/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TuiInputModule, TuiIslandModule} from "@taiga-ui/kit";
import {HttpClientModule} from "@angular/common/http";
import { MidComponent } from './mid/mid.component';
import { LowComponent } from './low/low.component';
import { HighComponent } from './high/high.component';
import {RouterModule} from "@angular/router";
import { ExchangegComponent } from './exchangeg/exchangeg.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MidComponent,
    LowComponent,
    HighComponent,
    ExchangegComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    HttpClientModule,
    RouterModule,
    TuiAlertModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButtonModule,
    TuiIslandModule,
    TuiExpandModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
