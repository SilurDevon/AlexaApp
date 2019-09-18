import {Subject} from 'rxjs';
import {Contact} from './contact';

export class ContactsService {
  contactsUpdated = new Subject();
  private contacts: Contact[] = [
    {
      id: 1,
      firstName: 'Bob',
      lastName: 'Baumeister',
      relation: 'Bruder',
      patient: 'Charlotte Schlotterbeck',
      tel: 17123456000
    },
    {
      id: 2,
      firstName: 'Klaus',
      lastName: 'Kleber',
      relation: 'Bruder',
      patient: 'Karl-Heinz Dimpfelmoser',
      tel: 171123456789,
    },
    {
      id: 3,
      firstName: 'Gerhardt',
      lastName: 'Schröder',
      relation: 'Enkel',
      patient: 'Heinrich Hotzenplotz',
      tel: 171123456789,
    },
  ];

  getContacts() {
    return [...this.contacts];
  }

  getContactWithID(id: number) {
    for (const contact of this.contacts) {
      if (contact.id === +id) {
        return contact;
      }
    }
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
    this.contactsUpdated.next();
  }

  deleteContact(contact: Contact) {
    const removedContact = this.contacts.indexOf(contact);
    this.contacts.splice(removedContact, 1);
    this.contactsUpdated.next();
  }

  createNewID() {
    let id = 0;
    for (const contactID of this.contacts) {
      if (id <= contactID.id) {
        id = contactID.id;
      }
    }
    return ++id;
  }
}
