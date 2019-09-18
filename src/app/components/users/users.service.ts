import {Subject} from 'rxjs';
import {User} from './user';

export class UsersService {
  usersUpdated = new Subject();
  private users: User[] = [
    {
      id: 1,
      username: 'lti',
      passwd: '****',
      lastName: 'Tigg',
      firstName: 'Leo',
      email: 'lti@fdcare.de',
    },
    {
      id: 2,
      username: 'pad',
      passwd: '****',
      lastName: 'Adel',
      firstName: 'Pia',
      email: 'pad@fdcare.de',

    },
  ];

  getUsers() {
    return [...this.users];
  }

  getUserWithID(id: number) {
    for (const user of this.users) {
      if (user.id === +id) {
        return user;
      }
    }
  }

  addUser(user: User) {
    this.users.push(user);
    this.usersUpdated.next();
  }

  deleteUser(user: User) {
    const removedUser = this.users.indexOf(user);
    this.users.splice(removedUser, 1);
    this.usersUpdated.next();
  }

  createNewID() {
    let id = 0;
    for (const userID of this.users) {
      if (id <= userID.id) {
        id = userID.id;
      }
    }
    return ++id;
  }
}
