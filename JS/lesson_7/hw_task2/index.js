function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    let newArr = arr.slice();
    newArr.reverse();
    return newArr;
  }
}

let numbers = [2, 6, 7, 8, 9];

console.log(squareArray(numbers));
