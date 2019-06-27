import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    LoginComponent,
  ],
  providers: [],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule {
}
