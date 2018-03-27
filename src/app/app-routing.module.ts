import { MedicationsComponent } from './medications/medications.component';
import { PatientsComponent } from './patients/patients.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPatientComponent } from './patients/new-patient/new-patient.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'patients', component: PatientsComponent, children: [
    { path: ':id/medications', component: MedicationsComponent },
    { path: 'new', component: NewPatientComponent }
  ] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
