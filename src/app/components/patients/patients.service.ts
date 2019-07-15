import {Subject} from 'rxjs';
import {Patient} from './patient';

export class PatientsService {
  patientsUpdated = new Subject();
  private patients: Patient[] = [
    {
      id: 1,
      lastName: 'Schlotterbeck',
      firstName: 'Charlotte',
      roomNumber: 101,
      pflegeGrad: 2,
      birthDate: new Date('1950-05-01'),
      gender: 'w',
    },
    {
      id: 4,
      lastName: 'Aftermath',
      firstName: 'Charlotte',
      roomNumber: 101,
      pflegeGrad: 3,
      birthDate: new Date('1950-05-01'),
      gender: 'w',
    },
    {
      id: 3,
      lastName: 'Kolnhasus',
      firstName: 'Charlotte',
      roomNumber: 404,
      pflegeGrad: 2,
      birthDate: new Date('1950-05-01'),
      gender: 'm',
    },
  ];

  getPatients() {
    return [...this.patients];
  }

  getPatientWithID(id: number) {
    for (const patient of this.patients) {
      if (patient.id === +id) {
        return patient;
      }
    }
  }

  addPatient(patient: Patient) {
    this.patients.push(patient);
    this.patientsUpdated.next();
  }

  deletePatient(patient: Patient) {
    const removedPatient = this.patients.indexOf(patient);
    this.patients.splice(removedPatient, 1);
    this.patientsUpdated.next();
  }

  createNewID() {
    let id = 0;
    for (const patientID of this.patients) {
      if (id <= patientID.id) {
        id = patientID.id;
      }
    }
    return ++id;
  }
}
