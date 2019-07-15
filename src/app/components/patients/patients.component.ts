import {Component, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {PatientsService} from './patients.service';
import {Subscription} from 'rxjs';
import {Patient} from './patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})

export class PatientsComponent implements OnInit, OnChanges, OnDestroy {
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'roomNumber', 'pflegeGrad', 'birthDate', 'gender'];
  dataSource: MatTableDataSource<Patient>;
  patients: Patient[] = [];

  rightClickSelect: Patient;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  private patientsSubscription: Subscription;

  constructor(private router: Router,
              private patientsService: PatientsService) {
  }

  ngOnInit() {
    this.patients = this.patientsService.getPatients();
    this.patientsSubscription = this.patientsService.patientsUpdated.subscribe(() => {
      this.patients = this.patientsService.getPatients();
    });

    this.dataSource = new MatTableDataSource(this.patients);
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
  }

  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewPatient(patient: Patient) {
    this.router.navigate(['core/patients', patient.id, 'view']).then();
  }


  createPatient() {
    this.router.navigate(['core/patients/create']).then();
  }

  openMenu(patient: Patient, trigger) {
    this.rightClickSelect = patient;
    trigger.openMenu();
    return false;
  }

  view() {
    this.router.navigate(['core/patients', this.rightClickSelect.id, 'view']).then();
  }

  edit() {
    this.router.navigate(['core/patients', this.rightClickSelect.id, 'edit']).then();
  }

  delete() {
    this.patientsService.deletePatient(this.rightClickSelect);
    this.patientsSubscription = this.patientsService.patientsUpdated.subscribe(() => {
      this.patients = this.patientsService.getPatients();
    });
  }

  ngOnDestroy() {
    this.patientsSubscription.unsubscribe();
  }
}
