import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {PatientsService} from './patients.service';
import {Patient} from './patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})

export class PatientsComponent implements OnInit {
  /**
   * definition of our Columns
   */
  displayedColumns: string[] = [
    'bewohner_id',
    'nachname',
    'vorname',
    'zimmernummer',
    'wohnbereich',
    'pflegegrad',
    'geburtsdatum',
    'geschlecht'];

  /**
   * data which is shown in the table
   */
  dataSource: MatTableDataSource<Patient>;

  rightClickSelect: Patient;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router: Router,
              private patientsService: PatientsService) {
  }

  ngOnInit() {
    this.patientsService
      .getPatients()
      .subscribe(
        (data: any) => {
          this.dataSource = new MatTableDataSource<Patient>(data.response);
          this.dataSource.sort = this.sort;
        });
  }

  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewPatient(patient: Patient) {
    this.router.navigate(['core/patients', patient.bewohner_id, 'view']).then();
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
    this.router.navigate(['core/patients', this.rightClickSelect.bewohner_id, 'view']).then();
  }

  edit() {
    this.router.navigate(['core/patients', this.rightClickSelect.bewohner_id, 'edit']).then();
  }

  delete() {
    // this.patientsService.deletePatient(this.rightClickSelect);
  }
}
