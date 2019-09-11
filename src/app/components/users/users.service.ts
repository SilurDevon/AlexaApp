import {Subject} from 'rxjs';
import {User} from './user';

export class UsersService {
  usersUpdated = new Subject();
  private users: User[] = [
    {
      id: 1,
      username: 'user1',
      passwd: 'user1',
      lastName: 'Schlotterbeck',
      firstName: 'Charlotte',
      email: 'email1',
    },
    {
      id: 4,
      username: 'user2',
      passwd: 'user2',
      lastName: 'Aftermath',
      firstName: 'Charlotte',
      email: 'email2',

    },
    {
      id: 3,
      passwd: 'user3',
      email: 'email3',
      lastName: 'Kolnhasus',
      firstName: 'Charlotte',
      username: 'user3',
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
