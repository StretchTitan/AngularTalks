import { Medication } from './../medication.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-medication-item',
  templateUrl: './medication-item.component.html',
  styleUrls: ['./medication-item.component.css']
})
export class MedicationItemComponent implements OnInit {
  @Input() medication: Medication;

  constructor() { }

  ngOnInit() {
  }

}
