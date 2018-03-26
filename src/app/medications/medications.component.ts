import { Component, OnInit } from '@angular/core';
import { Medication } from './medication.model';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.css']
})
export class MedicationsComponent implements OnInit {
  medications: Medication[] = [{
    name: 'Tylenol',
    dosage: '200mg',
    frequency: 'Twice a Day',
    rxPhysician: 'Dr. Clark Griswold'
  }, {
    name: 'Whiskey',
    dosage: '3 shots',
    frequency: 'Once a Day',
    rxPhysician: 'Dr. Clark Griswold'
  }, {
    name: 'Coffee',
    dosage: '1 cup',
    frequency: 'Twice a Day',
    rxPhysician: 'Dr. Clark Griswold'
  }, {
    name: 'Vitamins',
    dosage: '1 tablet',
    frequency: 'Once a Day',
    rxPhysician: 'Dr. Clark Griswold'
  }];

  constructor() { }

  ngOnInit() {
  }

}
