function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const getRandomNumbers = (length, from, to) => {
  // put your code here
  if (to - from < 1) {
    return null;
  }
  let arrNumbers = [];
  for (let i = 0; i < length; i++) {
    arrNumbers[i] = Math.round(Math.random() * (to - from) + from);
  }
  return arrNumbers;
};
let arr = [-12, 56, 56.442, 58.4];

console.log(getRandomNumbers(5, 1.5, 10.4));
