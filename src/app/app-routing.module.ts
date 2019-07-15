import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import {StartComponent} from './components/start/start.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {PatientsComponent} from './components/patients/patients.component';
import {ViewComponent} from './components/patients/patient/view/view.component';
import {EditComponent} from './components/patients/patient/edit/edit.component';
import {CreateComponent} from './components/patients/patient/create/create.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'core', component: DashboardComponent, children: [
      {path: 'patients', component: PatientsComponent},
      {path: 'patients/create', component: CreateComponent},
      {path: 'patients/:id/view', component: ViewComponent},
      {path: 'patients/:id/edit', component: EditComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
