import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  loginFailed = false;

  errorMessage: string;

  constructor() {
    this.loginFormGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit() {
  }

  login() {
    this.loginFailed = true;
    this.errorMessage = 'Incorrect Email or Password';
  }

  isValid(control: string) {
    return (this.loginFormGroup.get(control).hasError('required') && this.loginFormGroup.get(control).touched);
  }
}
