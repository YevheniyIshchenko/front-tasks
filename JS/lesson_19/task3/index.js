//put your code here
export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
  this.age = age;
  if (age < 0) {
    return false;
  } else if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  return age;
};

const user1 = new User('Tom', 20);

user1.sayHi();
user1.requestNewPhoto();
user1.setAge(25);
console.log(user1.setAge(5));
console.log(user1.setAge(-5));
