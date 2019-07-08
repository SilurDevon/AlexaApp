import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';

import {RegisterComponent} from './register.component';


@NgModule({
  imports: [CommonModule, BrowserModule,
    MatSidenavModule, MatButtonModule,
    MatFormFieldModule, MatInputModule,
    FlexLayoutModule, MatDividerModule,
    MatMenuModule],
  declarations: [
    RegisterComponent,
  ],
  providers: [],
  exports: [
    RegisterComponent,
  ]
})
export class RegisterModule {
}
