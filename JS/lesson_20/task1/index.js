export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }
  setAge(age) {
    this.age = age;
    if (age < 0) {
      return false;
    }
    if (age >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }
    return age;
  }
  static createEmpty() {
    return new this('', null);
  }
}

const user = new User('Tom', 25);
user.sayHi();
user.requestNewPhoto();
console.log(user.setAge(20));
console.log(user.setAge(5));
console.log('========================');
const user2 = User.createEmpty();
console.log(user2);
user2.sayHi();

user2.setAge(25);
console.log(user2);
