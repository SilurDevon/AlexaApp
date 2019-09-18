import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import {StartComponent} from './components/start/start.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

import {PatientsComponent} from './components/patients/patients.component';
import {ViewComponent} from './components/patients/patient/view/view.component';
import {EditComponent} from './components/patients/patient/edit/edit.component';
import {CreateComponent} from './components/patients/patient/create/create.component';

import {UsersComponent} from './components/users/users.component';
import {ViewUserComponent} from './components/users/user/view/view.component';
import {EditUserComponent} from './components/users/user/edit/edit.component';
import {CreateUserComponent} from './components/users/user/create/create.component';

import {CarersComponent} from './components/carers/carers.component';
import {ViewCarerComponent} from './components/carers/care/view/view.component';
import {EditCarerComponent} from './components/carers/care/edit/edit.component';
import {CreateCarerComponent} from './components/carers/care/create/create.component';

import {ContactsComponent} from './components/contacts/contacts.component';
import {ViewContactComponent} from './components/contacts/contact/view/view.component';
import {EditContactComponent} from './components/contacts/contact/edit/edit.component';
import {CreateContactComponent} from './components/contacts/contact/create/create.component';

import {TodoComponent} from './components/todo/todo.component';
import {RegisterComponent} from './components/register/register.component';



const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'core', component: DashboardComponent, children: [
      {path: 'patients', component: PatientsComponent},
      {path: 'patients/create', component: CreateComponent},
      {path: 'patients/:id/view', component: ViewComponent},
      {path: 'patients/:id/edit', component: EditComponent},

      {path: 'users', component: UsersComponent},
      {path: 'users/create', component: CreateUserComponent},
      {path: 'users/:id/view', component: ViewUserComponent},
      {path: 'users/:id/edit', component: EditUserComponent},

      {path: 'carers', component: CarersComponent},
      {path: 'carers/create', component: CreateCarerComponent},
      {path: 'carers/:id/view', component: ViewCarerComponent},
      {path: 'carers/:id/edit', component: EditCarerComponent},

      {path: 'contacts', component: ContactsComponent},
      {path: 'contacts/create', component: CreateContactComponent},
      {path: 'contacts/:id/view', component: ViewContactComponent},
      {path: 'contacts/:id/edit', component: EditContactComponent},

      {path: 'todo', component: TodoComponent},
      {path: 'register', component: RegisterComponent},




    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
