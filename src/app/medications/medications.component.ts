import { MedicationService } from './medication.service';
import { Component, OnInit } from '@angular/core';
import { Medication } from './medication.model';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.css']
})
export class MedicationsComponent implements OnInit {
  medications: Medication[];

  constructor(private ms: MedicationService) { }

  ngOnInit() {
    this.medications = this.ms.getMedications();
  }

}
