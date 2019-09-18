import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ContactsService} from '../../contacts.service';
import {Contact} from '../../contact';

@Component({
  selector: 'app-contact-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewContactComponent implements OnInit {
  contact: Contact;

  constructor(private route: ActivatedRoute,
              private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = 'id';
          this.contact = this.contactsService.getContactWithID(params[id]);
        },
      );
  }
}
