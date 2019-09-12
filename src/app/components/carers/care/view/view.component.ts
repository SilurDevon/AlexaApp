import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {CarersService} from '../../carers.service';
import {Carer} from '../../care';

@Component({
  selector: 'app-carer-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewCarerComponent implements OnInit {
  carer: Carer;

  constructor(private route: ActivatedRoute,
              private carersService: CarersService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = 'id';
          this.carer = this.carersService.getCarerWithID(params[id]);
        },
      );
  }
}
