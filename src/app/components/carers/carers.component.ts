import {Component, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {CarersService} from './carers.service';
import {Subscription} from 'rxjs';
import {Carer} from './care';

@Component({
  selector: 'app-carer',
  templateUrl: './carers.component.html',
  styleUrls: ['./carers.component.scss'],
})


export class CarersComponent implements OnInit, OnChanges, OnDestroy {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'persnr', 'tel',  'quali_id', 'wb_id'];
  dataSource: MatTableDataSource<Carer>;
  carers: Carer[] = [];

  rightClickSelect: Carer;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  private carersSubscription: Subscription;

  constructor(private router: Router,
              private carersService: CarersService) {
  }

  ngOnInit() {
    this.carers = this.carersService.getCarers();
    this.carersSubscription = this.carersService.carersUpdated.subscribe(() => {
      this.carers = this.carersService.getCarers();
    });

    this.dataSource = new MatTableDataSource(this.carers);
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
  }

  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewCarer(carer: Carer) {
    this.router.navigate(['core/carers', carer.id, 'view']).then();
  }


  createCarer() {
    this.router.navigate(['core/carers/create']).then();
  }

  openMenu(carer: Carer, trigger) {
    this.rightClickSelect = carer;
    trigger.openMenu();
    return false;
  }

  view() {
    this.router.navigate(['core/carers', this.rightClickSelect.id, 'view']).then();
  }

  edit() {
    this.router.navigate(['core/carers', this.rightClickSelect.id, 'edit']).then();
  }

  delete() {
    this.carersService.deleteCarer(this.rightClickSelect);
    this.carersSubscription = this.carersService.carersUpdated.subscribe(() => {
      this.carers = this.carersService.getCarers();
    });
  }

  ngOnDestroy() {
    this.carersSubscription.unsubscribe();
  }
}
