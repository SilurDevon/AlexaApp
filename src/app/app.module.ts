import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from './components/auth/login/login.module';
import {DashboardModule} from './components/dashboard/dashboard.module';
import {MaterialModule} from './shared/material.module';
import {RegisterModule} from './components/register/register.module';
import {TodoModule} from './components/todo/todo.module';
import {PatientsModule} from './components/patients/patients.module';
import {UsersModule} from './components/users/users.module';
import {CarersModule} from './components/carers/carers.module';
import {StartModule} from './components/start/start.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    DashboardModule,
    MaterialModule,
    RegisterModule,
    TodoModule,
    PatientsModule,
    UsersModule,
    CarersModule,
    StartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
