import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UsersService} from '../../users.service';
import {User} from '../../user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewUserComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute,
              private usersService: UsersService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = 'id';
          this.user = this.usersService.getUserWithID(params[id]);
        },
      );
  }
}
