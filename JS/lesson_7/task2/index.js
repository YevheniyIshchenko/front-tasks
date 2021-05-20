function sortDesc(arr) {
  let sortNumbers = arr.slice();

  sortNumbers.sort((a, b) => b - a);

  return sortNumbers;
}

let arr = [4, 56, 30, 3, 90, 34, 18];


console.log(arr);
console.log(sortDesc(arr));

console.log(arr);
