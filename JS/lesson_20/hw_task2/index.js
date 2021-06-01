'use strict'
export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }
  get users() {
    return this._users;
  }
  getUserNames() {
    return this._users.map((el) => el.name);
  }
  getUserIds() {
    return this._users.map((el) => el.id);
  }
  getUserNameById(id) {
    let result = this._users.filter((el) => el.id === id);
    return result[0].name;
  }
}

const user1 = new User('11', 'Tom', '1');
const user2 = new User('22', 'Bob', '2');
const user3 = new User('33', 'Anna', '3');
const user4 = new User('44', 'Alis', '4');

console.log(user1.id);
console.log(user1.name);
console.log(user1.sessionId);

const rep = new UserRepository([user1, user2, user3, user4]);
console.log(rep.users);
console.log(rep.getUserNames());
console.log(rep.getUserIds());
console.log(rep.getUserNameById('22'));

console.log();
// user1.name = 'Tim';
console.log(user1);

console.log('=======================')
const arr = [user1, user2, user3, user4];
console.log(arr);
let res = arr.map(el => el.name);
console.log(res);