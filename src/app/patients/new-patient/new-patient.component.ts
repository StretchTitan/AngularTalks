import { PatientsService } from './../patients.service';
import { Patient } from './../patient-item/patient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  emptyPatient: Patient = { name: '', dob: '', imagePath: '' };
  newPatient: Patient = this.emptyPatient;

  constructor(private ps: PatientsService) { }

  ngOnInit() {
  }

  addPatient() {
    this.ps.addPatient(this.newPatient);
  }

  // https://pbs.twimg.com/media/C_g1pYEUwAENkrJ.jpg

}
