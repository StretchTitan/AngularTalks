import { Injectable } from '@angular/core';
import { Patient } from './patient-item/patient.model';

@Injectable()
export class PatientsService {
  private patients: Patient[] = [{
    name: 'James Bond',
    dob: '1975-11-05T00:00:00Z',
    imagePath: 'https://fysheroes.files.wordpress.com/2011/04/bond.jpg'
  }, {
    name: 'Michael Scott',
    dob: '1985-07-02T00:00:00Z',
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png'
  }];

  constructor() { }

  getPatients() {
    return this.patients.slice();
  }

}
