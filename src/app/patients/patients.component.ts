import { PatientsService } from './patients.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from './patient-item/patient.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[];

  constructor(private ps: PatientsService) { }

  ngOnInit() {
    this.patients = this.ps.getPatients();
  }

}
