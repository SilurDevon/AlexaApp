import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {DashboardModule} from '../dashboard/dashboard.module';

@NgModule({
  imports: [CommonModule, BrowserModule, DashboardModule],
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
