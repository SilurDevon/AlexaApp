import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../users.service';
import {User} from '../../user';

@Component({
  selector: 'app-user-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateUserComponent implements OnInit {
  createUser: FormGroup;
  user: User;

  users = [
    {id: '0'},
    {id: '1'},
    {id: '2'},
    {id: '3'},
    {id: '4'},
    {id: '5'}
  ];


  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.createUser = new FormGroup({
      id: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      username: new FormControl(),
      passwd: new FormControl(),
      email: new FormControl(),
    });
  }



  submit() {
    this.user = {
      id: this.usersService.createNewID(),
      lastName: this.createUser.value.lastName,
      firstName: this.createUser.value.firstName,
      username: this.createUser.value.username,
      passwd: this.createUser.value.passwd,
      email: this.createUser.value.email,
    };
    this.usersService.addUser(this.user);
  }
}
