import { MedicationsComponent } from './medications/medications.component';
import { PatientsComponent } from './patients/patients.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'patients', component: PatientsComponent, children: [
    { path: ':id/medications', component: MedicationsComponent }
  ] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
