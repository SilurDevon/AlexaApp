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

import {VitalsComponent} from './vitals.component';
import {ViewVitalComponent} from './vital/view/view.component';
import {EditVitalComponent} from './vital/edit/edit.component';
import {CreateVitalComponent} from './vital/create/create.component';
import {
  MatCardModule,
  MatDatepickerModule,
  MatRadioModule, MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule,
} from '@angular/material';
import {VitalsService} from './vitals.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    VitalsComponent,
    ViewVitalComponent,
    EditVitalComponent,
    CreateVitalComponent,
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
  exports: [VitalsComponent],
  providers: [VitalsService],
})
export class VitalsModule {
}
