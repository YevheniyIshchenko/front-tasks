function sum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    let result = arr.reduce(function (acc, num) {
      return acc + num;
    });
    return result;
  }
}

let numbers = [23, 56, 54, 8, 6, 8];

console.log(sum(numbers));
