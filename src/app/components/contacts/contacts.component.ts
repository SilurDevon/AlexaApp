import {Component, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {ContactsService} from './contacts.service';
import {Subscription} from 'rxjs';
import {Contact} from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})


export class ContactsComponent implements OnInit, OnChanges, OnDestroy {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'relation', 'patient', 'tel'];
  dataSource: MatTableDataSource<Contact>;
  contacts: Contact[] = [];

  rightClickSelect: Contact;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  private contactsSubscription: Subscription;

  constructor(private router: Router,
              private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
    this.contactsSubscription = this.contactsService.contactsUpdated.subscribe(() => {
      this.contacts = this.contactsService.getContacts();
    });

    this.dataSource = new MatTableDataSource(this.contacts);
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
  }

  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewContact(contact: Contact) {
    this.router.navigate(['core/contacts', contact.id, 'view']).then();
  }


  createContact() {
    this.router.navigate(['core/contacts/create']).then();
  }

  openMenu(contact: Contact, trigger) {
    this.rightClickSelect = contact;
    trigger.openMenu();
    return false;
  }

  view() {
    this.router.navigate(['core/contacts', this.rightClickSelect.id, 'view']).then();
  }

  edit() {
    this.router.navigate(['core/contacts', this.rightClickSelect.id, 'edit']).then();
  }

  delete() {
    this.contactsService.deleteContact(this.rightClickSelect);
    this.contactsSubscription = this.contactsService.contactsUpdated.subscribe(() => {
      this.contacts = this.contactsService.getContacts();
    });
  }

  ngOnDestroy() {
    this.contactsSubscription.unsubscribe();
  }
}
