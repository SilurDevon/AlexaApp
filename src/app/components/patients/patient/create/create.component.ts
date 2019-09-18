import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PatientsService} from '../../patients.service';
import {Patient} from '../../patient';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  createPatient: FormGroup;
  patient: Patient;

  rooms = [
    {id: '0', roomNumber: '101'},
    {id: '1', roomNumber: '102'},
    {id: '2', roomNumber: '404'},
  ];
  grades = [
    {id: '0', number: '1'},
    {id: '1', number: '2'},
    {id: '2', number: '3'},
  ];

  constructor(private patientsService: PatientsService) {
  }

  ngOnInit() {
    this.createPatient = new FormGroup({
      preName: new FormControl(),
      lastName: new FormControl(),
      gender: new FormControl(Validators.required),
      birthDate: new FormControl(Validators.required),
      roomNumber: new FormControl(Validators.required),
      pflegeGrad: new FormControl(Validators.required),
    });
  }

  submit() {
    this.patient = {
      id: this.patientsService.createNewID(),
      lastName: this.createPatient.value.lastName,
      firstName: this.createPatient.value.preName,
      roomNumber: this.createPatient.value.roomNumber,
      pflegeGrad: this.createPatient.value.pflegeGrad,
      birthDate: this.createPatient.value.birthDate,
      gender: this.createPatient.value.gender,
    };
    this.patientsService.addPatient(this.patient);
    alert('Neuer Bewohner angelegt.');
    this.createPatient.reset();
  }
}
