import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {LoginComponent} from './login.component';
import {DashboardModule} from '../../dashboard/dashboard.module';

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
