import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: boolean;
  patient: boolean;
  dashboard: boolean;
  today: any;
  currentUser: string;


  constructor() { }

  ngOnInit() {
    this.user = false;
    this.patient = false;
    this.dashboard = true;
  }



showDashboard() {
  this.dashboard = true;
  this.user = false;
  this.patient = false;

}

  createUser() {
    this.user = true;
    this.dashboard = false;
    this.patient = false;
  }

  createPatient() {
    this.patient = true;
    this.dashboard = false;
    this.user = false;
  }

  showCurrentDate() {
    this.today = moment().format('LLLL');
    return this.today;
  }

  showCurrentUser() {
    return 'Hello Team Prog!';
  }

}
