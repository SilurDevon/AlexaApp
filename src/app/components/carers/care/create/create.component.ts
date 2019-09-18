import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarersService} from '../../carers.service';
import {Carer} from '../../care';

@Component({
  selector: 'app-carer-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateCarerComponent implements OnInit {
  createCarer: FormGroup;
  carer: Carer;

  carers = [
    {id: '0'},
    {id: '1'},
    {id: '2'},
    {id: '3'},
    {id: '4'},
    {id: '5'}
  ];


  constructor(private carersService: CarersService) {
  }

  ngOnInit() {
    this.createCarer = new FormGroup({
      id: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      persnr: new FormControl(),
      tel: new FormControl(),
      quali_id: new FormControl(),
      wb_id: new FormControl()
    });
  }


  submit() {
    this.carer = {
      id: this.carersService.createNewID(),
      firstName: this.createCarer.value.firstName,
      lastName: this.createCarer.value.lastName,
      persnr: this.createCarer.value.persnr,
      tel: this.createCarer.value.tel,
      quali_id: this.createCarer.value.quali_id,
      wb_id: this.createCarer.value.wb_id,
    };
    this.carersService.addCarer(this.carer);
    alert('Neuer Mitarbeiter angelegt.');
    this.createCarer.reset();
  }
}
