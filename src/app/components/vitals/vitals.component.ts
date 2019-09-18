import {Component, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {VitalsService} from './vitals.service';
import {Subscription} from 'rxjs';
import {Vital} from './vitals';


@Component({
  selector: 'app-vital',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss'],
})

export class VitalsComponent implements OnInit, OnChanges, OnDestroy {
  displayedColumns: string[] = ['vitalwerttransaktion_id', 'bewohner_id', 'bewohner_name',
                                'vitalwert_id', 'messwert',  'pfleger_id', 'pfleger_name',
                                'datum', 'zeit'];
  dataSource: MatTableDataSource<Vital>;
  vitals: Vital[] = [];

  rightClickSelect: Vital;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  private vitalsSubscription: Subscription;

  constructor(private router: Router,
              private vitalsService: VitalsService) {
  }

  ngOnInit() {
    this.vitals = this.vitalsService.getVitals();
    this.vitalsSubscription = this.vitalsService.vitalsUpdated.subscribe(() => {
      this.vitals = this.vitalsService.getVitals();
    });

    this.dataSource = new MatTableDataSource(this.vitals);
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
  }

  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewVital(vital: Vital) {
    this.router.navigate(['core/vitals', vital.vitalwerttransaktion_id, 'view']).then();
  }


  createVital() {
    this.router.navigate(['core/vitals/create']).then();
  }

  openMenu(vital: Vital, trigger) {
    this.rightClickSelect = vital;
    trigger.openMenu();
    return false;
  }

  view() {
    this.router.navigate(['core/vitals', this.rightClickSelect.vitalwerttransaktion_id, 'view']).then();
  }

  edit() {
    this.router.navigate(['core/vitals', this.rightClickSelect.vitalwerttransaktion_id, 'edit']).then();
  }

  delete() {
    this.vitalsService.deleteVital(this.rightClickSelect);
    this.vitalsSubscription = this.vitalsService.vitalsUpdated.subscribe(() => {
      this.vitals = this.vitalsService.getVitals();
    });
  }

  ngOnDestroy() {
    this.vitalsSubscription.unsubscribe();
  }
}
