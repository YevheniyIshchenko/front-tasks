function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    const newArr = arr.map(number => number * number);
    return newArr;
  }
}

let numbers = [2, 6, 7, 8, 9];

console.log(squareArray(numbers));