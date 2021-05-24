function getTotalPrice(arr) {
  let result = arr.reduce((acc, el) => acc + el);
  result = '$' + Math.floor(result * 100) / 100;
  return result;
}

let arr = [-12, 56, 56.442, 58.4];

console.log(getTotalPrice(arr));
