import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { ToolsComponent } from '../tools/tools.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    DashboardComponent,
    ToolsComponent
  ],
  providers: [],
  exports: [
    DashboardComponent,
    ToolsComponent
  ]
})
export class DashboardModule { }
