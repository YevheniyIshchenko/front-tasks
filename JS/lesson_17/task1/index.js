export const user = {
  firstName: 'Tom',
  lastName: 'Henks',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());
