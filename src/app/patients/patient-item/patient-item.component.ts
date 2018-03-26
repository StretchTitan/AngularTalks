import { Component, OnInit, Input } from '@angular/core';
import { Patient } from './patient.model';

@Component({
  selector: 'app-patient-item',
  templateUrl: './patient-item.component.html',
  styleUrls: ['./patient-item.component.css']
})
export class PatientItemComponent implements OnInit {
  @Input() patient: Patient;
  @Input() key: number;

  constructor() { }

  ngOnInit() {
  }

}
