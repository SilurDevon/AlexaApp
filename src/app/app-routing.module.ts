import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import {StartComponent} from './components/start/start.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RegisterComponent} from './components/register/register.component';
import {TodoComponent} from './components/todo/todo.component';
import {PatientsComponent} from './components/patients/patients.component';

// @ts-ignore
const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'patients', component: PatientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
