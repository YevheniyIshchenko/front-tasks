function arrAvarage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    let result = arr.reduce((acc, num) => {
      return acc + num;
    });
    result /= arr.length;
    return result;
  }
}

let numbers = [10, 20, 30, 40, 50];

console.log(arrAvarage(numbers));
