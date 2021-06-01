// export const getOwnProps = (obj) => {
//   const res = [];
//   for (let prop in obj) {
//     if (obj.hasOwnProperty(prop)) {
//       res.push(prop);
//     }
//   }
//   return res;
// };

export const getOwnProps = (obj) => {
  const res = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      res.push(prop);
    }
  }
  return res;
};

const doSmth = {
  move() {
    console.log(move);
  },
  stop() {
    console.log(stop);
  },
};

const user = {
  name: 'Alex',
  lastName: 'Petrov',
  age: '18',
  fullName() {
    console.log(`${this.name} ${this.lastName}`);
  },
};

Object.setPrototypeOf(user, doSmth);
user.fullName();
console.log(getOwnProps(user));
