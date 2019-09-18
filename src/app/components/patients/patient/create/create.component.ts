import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  createPatient: FormGroup;
  patient: any;

  rooms = [
    {id: '0', zimmernummer: '101'},
    {id: '1', zimmernummer: '102'},
    {id: '2', zimmernummer: '404'},
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
      vorname: new FormControl(Validators.required),
      nachname: new FormControl(Validators.required),
      geschlecht: new FormControl(Validators.required),
      geburtsdatum: new FormControl(Validators.required),
      zimmernummer: new FormControl(Validators.required),
      wohnbereich: new FormControl(),
      pflegeGrad: new FormControl(Validators.required),
    });
  }


  submit() {
    this.patient = {
      // bewohner_id: undefined,
      nachname: this.createPatient.value.nachname,
      vorname: this.createPatient.value.vorname,
      zimmernummer: this.rooms[this.createPatient.value.zimmernummer].zimmernummer,
      // wohnbereich: this.createPatient.value.wohnbereich,
      pflegegrad: this.createPatient.value.pflegeGrad,
      geburtsdatum: this.createPatient.value.geburtsdatum,
      geschlecht: this.createPatient.value.geschlecht,
    };
    // this.patientsService.getPatients()
    //   .subscribe(
    //     (data: any) => {
    //       let id = 0;
    //       for (const patientID of data.response) {
    //         if (id <= patientID.bewohner_id) {
    //           id = patientID.bewohner_id;
    //         }
    //       }
    //       this.patient.bewohner_id = ++id;
    //     });

    this.patientsService.addPatient(this.patient);
    // this.createPatient.reset();
  }
}
