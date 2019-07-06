import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

import {DashboardComponent} from './dashboard.component';


@NgModule({
  imports: [CommonModule, BrowserModule, MatSidenavModule, MatButtonModule],
  declarations: [
    DashboardComponent,
  ],
  providers: [],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule {
}
