import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageTwoSubmitButtonComponent } from './page-one/page-two-submit-button/page-two-submit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PageTwoComponent,
    PageTwoSubmitButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
