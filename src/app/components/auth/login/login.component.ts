import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  loginFailed = false;

  errorMessage: string;

  constructor(private router: Router) {
    this.loginFormGroup = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['core']).then();
  }

  isValid(control: string) {
    return (this.loginFormGroup.get(control).hasError('required') && this.loginFormGroup.get(control).touched);
  }
}
