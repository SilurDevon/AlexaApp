import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VitalsService} from '../../vitals.service';
import {Vital} from '../../vitals';
import * as moment from 'moment';

@Component({
  selector: 'app-vital-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateVitalComponent implements OnInit {
  createVital: FormGroup;
  vital: Vital;
  datum: any = moment().format('L');
  zeit: any = moment().format('LT')

  vitals = [
    {id: '0'},
    {id: '1'},
    {id: '2'},
    {id: '3'},
    {id: '4'},
    {id: '5'}
  ];


  constructor(private vitalsService: VitalsService) {
  }

  ngOnInit() {
    this.createVital = new FormGroup({
      vitalwerttransaktion_id: new FormControl(),
      bewohner_id: new FormControl(),
      bewohner_name: new FormControl(),
      vitalwert_id: new FormControl(),
      vitalwert: new FormControl(),
      messwert: new FormControl(),
      pfleger_id: new FormControl(),
      pfleger_name: new FormControl(),
      datum: new FormControl(),
      zeit: new FormControl(),
    });
  }



  submit() {
    this.vital = {
      vitalwerttransaktion_id: this.createVital.value.vitalwerttransaktion_id,
      bewohner_id: this.createVital.value.bewohner_id,
      bewohner_name: this.createVital.value.bewohner_name,
      vitalwert_id: this.createVital.value.vitalwert_id,
      vitalwert: this.createVital.value.vitalwert,
      messwert: this.createVital.value.messwert,
      pfleger_id: this.createVital.value.pfleger_id,
      pfleger_name: this.createVital.value.pfleger_name,
      datum: this.datum,
      zeit: this.zeit,

    };
    this.vitalsService.addVital(this.vital);
    alert('Neue Werte wurden angelegt.');
    this.createVital.reset();
  }

  showDashboard() {
    return moment().format('LLLL');
  }
}
