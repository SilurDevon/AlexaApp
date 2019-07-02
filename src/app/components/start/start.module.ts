import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../shared/material.module';
import {StartComponent} from './start.component';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule, MaterialModule,
  ],
})
export class StartModule {
}
