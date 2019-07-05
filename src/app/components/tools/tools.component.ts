import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  public user: boolean;


  constructor() {
  }

  ngOnInit() {
    this.user = false;
  }

  createUser() {
    console.log(this.user);
    this.user = true;
    console.log(this.user);
  }


}
