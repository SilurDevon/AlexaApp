import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, BrowserModule],
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
