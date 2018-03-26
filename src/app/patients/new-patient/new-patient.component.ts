import { Patient } from './../patient-item/patient.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  @Output() newPatientSubmitted = new EventEmitter<Patient>();
  emptyPatient: Patient = { name: '', dob: '', imagePath: '' };
  newPatient: Patient = this.emptyPatient;


  constructor() { }

  ngOnInit() {
  }

  submitNewPatient() {
    this.newPatientSubmitted.emit(this.newPatient);
    this.newPatient = { name: '', dob: '', imagePath: '' };
  }

  // https://pbs.twimg.com/media/C_g1pYEUwAENkrJ.jpg

}
