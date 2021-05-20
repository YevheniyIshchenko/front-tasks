function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    let newArr = [...arr]
    return newArr;
  }
}

let numbers = [2, 6, 7, 8, 9];

console.log(cloneArr(numbers));
console.log(numbers);
