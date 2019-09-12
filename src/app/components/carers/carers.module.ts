import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';

import {CarersComponent} from './carers.component';
import {ViewCarerComponent} from './care/view/view.component';
import {EditCarerComponent} from './care/edit/edit.component';
import {CreateCarerComponent} from './care/create/create.component';
import {
  MatCardModule,
  MatDatepickerModule,
  MatRadioModule, MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule,
} from '@angular/material';
import {CarersService} from './carers.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CarersComponent,
    ViewCarerComponent,
    EditCarerComponent,
    CreateCarerComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatDividerModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    FormsModule,
    MatSelectModule,
  ],
  exports: [CarersComponent],
  providers: [CarersService],
})
export class CarersModule {
}
