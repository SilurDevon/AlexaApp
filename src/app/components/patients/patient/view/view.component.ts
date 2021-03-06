import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PatientsService} from '../../patients.service';
import {Patient} from '../../patient';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  private patient: Patient;

  constructor(private route: ActivatedRoute,
              private patientsService: PatientsService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = params.id;
          this.patientsService.getPatients()
            .subscribe((data: any) => this.patient = data.response[id]);
        },
      );
  }
}
