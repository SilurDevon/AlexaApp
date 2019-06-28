import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {ToolsModule} from '../tools/tools.module';

@NgModule({
  imports: [CommonModule, BrowserModule, ToolsModule],
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
