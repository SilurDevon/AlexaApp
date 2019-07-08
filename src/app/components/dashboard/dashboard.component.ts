import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: boolean;
  today: any;
  currentUser: string;


  constructor() { }

  ngOnInit() {
    this.user = false;
  }





  createUser() {
    this.user = true;
  }

  showCurrentDate() {
    this.today = moment().format('LLLL');
    return this.today;
  }

  showCurrentUser() {
    return 'Hello Team Prog!';
  }



}
