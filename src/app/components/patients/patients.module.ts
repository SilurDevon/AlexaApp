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

import {PatientsComponent} from './patients.component';


@NgModule({
  imports: [CommonModule, BrowserModule,
    MatSidenavModule, MatButtonModule,
    MatFormFieldModule, MatInputModule,
    FlexLayoutModule, MatDividerModule,
    MatMenuModule],
  declarations: [
    PatientsComponent,
  ],
  providers: [],
  exports: [
    PatientsComponent,
  ]
})
export class PatientsModule {
}
