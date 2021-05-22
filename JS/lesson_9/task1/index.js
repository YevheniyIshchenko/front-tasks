const getAdults = (obj) => {
  // put your code here
  let arr = [];
  arr = Object.entries(obj).filter(user => user[1] >= 18).map((user) => user[0]);
  return arr;
};

const obj = {
  Bob: 18,
  Anna: 17,
};

console.log(getAdults(obj));
