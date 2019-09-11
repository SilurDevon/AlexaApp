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
  ];


  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.createUser = new FormGroup({
      preName: new FormControl(),
      lastName: new FormControl(),
      username: new FormControl(Validators.required),
      passwd: new FormControl(Validators.required),
      email: new FormControl(Validators.required),
    });
  }



  submit() {
    this.user = {
      id: this.usersService.createNewID(),
      lastName: this.createUser.value.lastName,
      firstName: this.createUser.value.preName,
      username: this.createUser.value.userName,
      passwd: this.createUser.value.passwa,
      email: this.createUser.value.email,
    };
    this.usersService.addUser(this.user);
  }
}
