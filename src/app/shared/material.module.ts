import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
} from '@angular/material';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule],
})
export class MaterialModule {
}
