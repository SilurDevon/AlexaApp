import {Subject} from 'rxjs';
import {Carer} from './care';

export class CarersService {
  carersUpdated = new Subject();
  private carers: Carer[] = [
    {
      id: 1,
      firstName: 'Meier',
      lastName: 'Rebecca',
      persnr: 101,
      tel: 171123456789,
      quali_id: 1,
      wb_id: 2,
    },
    {
      id: 4,
      firstName: 'Schmidt',
      lastName: 'Elisabeth',
      persnr: 102,
      tel: 171123456789,
      quali_id: 3,
      wb_id: 2,
    },
    {
      id: 3,
      firstName: 'Musterfrau',
      lastName: 'Antonia',
      persnr: 103,
      tel: 171123456789,
      quali_id: 3,
      wb_id: 2,
    },
    {
      id: 4,
      firstName: 'Mustermann',
      lastName: 'Jakob',
      persnr: 104,
      tel: 171123456789,
      quali_id: 2,
      wb_id: 3,
    },
  ];

  getCarers() {
    return [...this.carers];
  }

  getCarerWithID(id: number) {
    for (const carer of this.carers) {
      if (carer.id === +id) {
        return carer;
      }
    }
  }

  addCarer(carer: Carer) {
    this.carers.push(carer);
    this.carersUpdated.next();
  }

  deleteCarer(carer: Carer) {
    const removedCarer = this.carers.indexOf(carer);
    this.carers.splice(removedCarer, 1);
    this.carersUpdated.next();
  }

  createNewID() {
    let id = 0;
    for (const carerID of this.carers) {
      if (id <= carerID.id) {
        id = carerID.id;
      }
    }
    return ++id;
  }
}
