import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from './components/auth/login/login.module';
import {DashboardModule} from './components/dashboard/dashboard.module';
import {MaterialModule} from './shared/material.module';
import {StartComponent} from './components/start/start.component';
// import {UserModule} from './components/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    DashboardModule,
    MaterialModule,
    // UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
