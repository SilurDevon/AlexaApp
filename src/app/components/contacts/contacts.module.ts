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

import {ContactsComponent} from './contacts.component';
import {ViewContactComponent} from './contact/view/view.component';
import {EditContactComponent} from './contact/edit/edit.component';
import {CreateContactComponent} from './contact/create/create.component';
import {
  MatCardModule,
  MatDatepickerModule,
  MatRadioModule, MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule,
} from '@angular/material';
import {ContactsService} from './contacts.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ContactsComponent,
    ViewContactComponent,
    EditContactComponent,
    CreateContactComponent,
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
  exports: [ContactsComponent],
  providers: [ContactsService],
})
export class ContactsModule {
}
