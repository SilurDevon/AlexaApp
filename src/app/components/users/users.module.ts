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

import {UsersComponent} from './users.component';
import {ViewUserComponent} from './user/view/view.component';
import {EditUserComponent} from './user/edit/edit.component';
import {CreateUserComponent} from './user/create/create.component';
import {
  MatCardModule,
  MatDatepickerModule,
  MatRadioModule, MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule,
} from '@angular/material';
import {UsersService} from './users.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    ViewUserComponent,
    EditUserComponent,
    CreateUserComponent,
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
  exports: [UsersComponent],
  providers: [UsersService],
})
export class UsersModule {
}
