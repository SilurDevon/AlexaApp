import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import { ToolsComponent } from './tools.component';

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
