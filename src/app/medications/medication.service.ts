import { Medication } from './medication.model';
import { Injectable } from '@angular/core';

@Injectable()
export class MedicationService {
  private medications: Medication[] = [{
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
  }];

  constructor() { }

  getMedications() {
    return this.medications.slice();
  }
}
