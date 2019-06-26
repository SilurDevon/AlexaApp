import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ToolsComponent } from '../tools/tools.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    LoginComponent,
    DashboardComponent,
    ToolsComponent

  ],
  providers: [],
  exports: [
    LoginComponent,
    DashboardComponent,
    ToolsComponent
  ]
})
export class LoginModule { }
