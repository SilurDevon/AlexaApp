import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';

import { UserComponent } from './/user.component';

@NgModule({
  imports: [CommonModule, BrowserModule, MatInputModule],
  declarations: [
    UserComponent
  ],
  providers: [],
  exports: [
    UserComponent,
  ]
})
export class UserModule { }
