import {Patient} from './patient';
import {HttpClient} from '@angular/common/http';

export class PatientsService {
  private ROOT_URL = 'https://api.dmprojekt19.informatik.hs-fulda.de';

  constructor(private http: HttpClient) {
  }

  getPatients() {
    return this.http.get<Patient>(this.ROOT_URL + '/bewohner');
  }

  addPatient(patient: Patient) {
    console.log(patient);
    return this.http.post(this.ROOT_URL + '/bewohner/new', patient).subscribe(
      data => console.log(data),
      err => console.log(err, patient),
      () => console.log('Added Patient'),
    );
  }

  getPatientWithID(id: number) {
    return this.http.get<Patient>(this.ROOT_URL + '/bewohner' + id);
  }

  deletePatient(patient: Patient) {
  }
}
