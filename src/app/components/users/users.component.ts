import {Component, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {UsersService} from './users.service';
import {Subscription} from 'rxjs';
import {User} from './user';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})

export class UsersComponent implements OnInit, OnChanges, OnDestroy {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'username', 'passwd',  'email'];
  dataSource: MatTableDataSource<User>;
  users: User[] = [];

  rightClickSelect: User;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  private usersSubscription: Subscription;

  constructor(private router: Router,
              private usersService: UsersService) {
  }

  ngOnInit() {
    this.users = this.usersService.getUsers();
    this.usersSubscription = this.usersService.usersUpdated.subscribe(() => {
      this.users = this.usersService.getUsers();
    });

    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
  }

  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewUser(user: User) {
    this.router.navigate(['core/users', user.id, 'view']).then();
  }


  createUser() {
    this.router.navigate(['core/users/create']).then();
  }

  openMenu(user: User, trigger) {
    this.rightClickSelect = user;
    trigger.openMenu();
    return false;
  }

  view() {
    this.router.navigate(['core/users', this.rightClickSelect.id, 'view']).then();
  }

  edit() {
    this.router.navigate(['core/users', this.rightClickSelect.id, 'edit']).then();
  }

  delete() {
    this.usersService.deleteUser(this.rightClickSelect);
    this.usersSubscription = this.usersService.usersUpdated.subscribe(() => {
      this.users = this.usersService.getUsers();
    });
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }
}
