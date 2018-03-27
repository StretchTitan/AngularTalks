import { PatientsService } from './patients.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Patient } from './patient-item/patient.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit, OnDestroy {
  patients: Patient[];
  patientsSubscription: Subscription;

  showNewPatientForm = false;

  constructor(private ps: PatientsService) { }

  ngOnInit() {
    this.patients = this.ps.getPatients();
    this.patientsSubscription = this.ps.patientsUpdated.subscribe((patients: Patient[]) => this.patients = patients);
  }

  ngOnDestroy() {
    this.patientsSubscription.unsubscribe();
  }
}
