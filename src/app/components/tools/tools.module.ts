import { NgModule } from '@angular/core';
import { ToolsComponent } from './tools.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    ToolsComponent
  ],
  providers: [],
  exports: [
    ToolsComponent,
  ]
})
export class ToolsModule { }
