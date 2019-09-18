import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactsService} from '../../contacts.service';
import {Contact} from '../../contact';

@Component({
  selector: 'app-contact-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})


export class CreateContactComponent implements OnInit {

  createContact: FormGroup;
  contact: Contact;

  contacts = [
    {id: '0'},
    {id: '1'},
    {id: '2'},
    {id: '3'},
    {id: '4'},
    {id: '5'}
  ];


  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.createContact = new FormGroup({
      id: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      relation: new FormControl(),
      patient: new FormControl(),
      tel: new FormControl(),
    });
  }


  submit() {
    this.contact = {
      id: this.contactsService.createNewID(),
      firstName: this.createContact.value.firstName,
      lastName: this.createContact.value.lastName,
      relation: this.createContact.value.relation,
      patient: this.createContact.value.patient,
      tel: this.createContact.value.tel,
    };
    this.contactsService.addContact(this.contact);
    alert('Neue Kontaktperson angelegt.');
    this.createContact.reset();
  }

}
