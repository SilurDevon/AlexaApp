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

import {DashboardComponent} from './dashboard.component';
import {RegisterModule} from '../register/register.module';
import {PatientsModule} from '../patients/patients.module';
import {UsersModule} from '../users/users.module';
import {CarersModule} from '../carers/carers.module';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material';


@NgModule({
  imports: [RegisterModule, PatientsModule, UsersModule, CarersModule,
    CommonModule, BrowserModule,
    MatSidenavModule, MatButtonModule,
    MatFormFieldModule, MatInputModule,
    FlexLayoutModule, MatDividerModule,
    MatMenuModule, RouterModule, MatIconModule],
  declarations: [
    DashboardComponent
  ],
  providers: [],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
