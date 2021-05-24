function superRound(number, roundNumber) {
  let pow = Math.pow(10, roundNumber);
  let numbersArr = [
    Math.floor(number * pow) / pow,
    Math.round(number * pow) / pow,
    Math.ceil(number * pow) / pow,
    Math.trunc(number * pow) / pow,
    +number.toFixed(roundNumber),
  ];
  return numbersArr;
}
let arr = [-12, 56, 56.442, 58.4];

console.log(superRound(12.125633, 8));
console.log(Math.pow(10, 7));