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

import {PatientsComponent} from './patients.component';
import {ViewComponent} from './patient/view/view.component';
import {EditComponent} from './patient/edit/edit.component';
import {CreateComponent} from './patient/create/create.component';
import {
  MatCardModule,
  MatDatepickerModule,
  MatRadioModule, MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule,
} from '@angular/material';
import {PatientsService} from './patients.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    PatientsComponent,
    ViewComponent,
    EditComponent,
    CreateComponent,
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
  exports: [PatientsComponent],
  providers: [PatientsService],
})
export class PatientsModule {
}
