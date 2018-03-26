import { AuthService } from './shared/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PatientsComponent } from './patients/patients.component';
import { MedicationsComponent } from './medications/medications.component';
import { PatientItemComponent } from './patients/patient-item/patient-item.component';
import { HeaderComponent } from './header/header.component';
import { MedicationItemComponent } from './medications/medication-item/medication-item.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientsComponent,
    MedicationsComponent,
    PatientItemComponent,
    HeaderComponent,
    MedicationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HttpClientModule,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
