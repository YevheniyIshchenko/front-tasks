export const user = {
  firstName: 'Tom',
  lastName: 'Hanks',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    let arr = fullName.split(' ');
    this.firstName = arr[0];
    this.lastName = arr[1];
  },
};

console.log(user.getFullName());
console.log(user.setFullName('Bob Hanks'));
console.log(user);
