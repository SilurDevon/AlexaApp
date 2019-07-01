import {NgModule} from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule],
})
export class MaterialModule {
}
