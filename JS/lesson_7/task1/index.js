function getSpecialNumbers(arr) {
  let specialNumbers = [];

  function checkIfSpecialNumbers(num) {
    if (num % 3 === 0) {
      specialNumbers.push(num);
    }
  }
  arr.forEach(checkIfSpecialNumbers);

  return specialNumbers;
}

let arr = [4, 56, 30, 3, 90, 34, 18];

console.log(getSpecialNumbers(arr));
