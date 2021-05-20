function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    // let newArr = arr.filter((number) => number % 2 === 0);
    let newArr = arr.map(function (number) {
      if (number % 2 === 0) {
        return number + delta;
      } else {
        return number;
      }
    });
    return newArr;
  }
}

let numbers = [2, 6, 7, 8, 9];

console.log(increaseEvenEl(numbers, 10));
console.log(numbers);
