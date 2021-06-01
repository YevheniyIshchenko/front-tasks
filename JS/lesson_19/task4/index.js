 const user = {
  firstName: 'Alex',
  lastName: 'Petrov',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

export default user;
console.log(user.fullName);

console.log((user.fullName = 'Dima Komarov'));

console.log(user.fullName);
