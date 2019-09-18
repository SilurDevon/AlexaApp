import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {VitalsService} from '../../vitals.service';
import {Vital} from '../../vitals';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewVitalComponent implements OnInit {
  vital: Vital;

  constructor(private route: ActivatedRoute,
              private vitalsService: VitalsService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = 'id';
          this.vital = this.vitalsService.getVitalWithID(params[id]);
        },
      );
  }
}
