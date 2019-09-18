import {Subject} from 'rxjs';
import {Vital} from './vitals';

export class VitalsService {
  vitalsUpdated = new Subject();
  private vitals: Vital[] = [
    {
      vitalwerttransaktion_id: 19,
      bewohner_id: 1,
      bewohner_name: 'Charlotte Schlotterbeck',
      vitalwert_id: 7,
      vitalwert: 'Größe (cm)',
      messwert: 165,
      pfleger_id: 3,
      pfleger_name: 'Antonia Musterfrau',
      datum: '2019-09-17',
      zeit: '03:02:07',
    },
    {
      vitalwerttransaktion_id: 18,
      bewohner_id: 2,
      bewohner_name: 'Karl-Heinz Dimpfelmoser',
      vitalwert_id: 3,
      vitalwert: 'Blutdruck (Dia)',
      messwert: 55,
      pfleger_id: 3,
      pfleger_name: 'Antonia Musterfrau',
      datum: '2019-09-16',
      zeit: '19:35:06',

    },
  ];

  getVitals() {
    return [...this.vitals];
  }

  getVitalWithID(id: number) {
    for (const vital of this.vitals) {
      if (vital.vitalwerttransaktion_id === +id) {
        return vital;
      }
    }
  }

  addVital(vital: Vital) {
    this.vitals.push(vital);
    this.vitalsUpdated.next();
  }

  deleteVital(vital: Vital) {
    const removedVital = this.vitals.indexOf(vital);
    this.vitals.splice(removedVital, 1);
    this.vitalsUpdated.next();
  }

  createNewID() {
    let id = 0;
    for (const vitalID of this.vitals) {
      if (id <= vitalID.vitalwerttransaktion_id) {
        id = vitalID.vitalwerttransaktion_id;
      }
    }
    return ++id;
  }
}
