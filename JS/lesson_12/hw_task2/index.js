// function name cleanTransactionsList
// input:strings array, unchangeable
//output:strings array
//algoritm:
//1. create new array for result
//2. accept input array to new array by use method filter use isFinite for each element
//3. use method map for each element use methods:parseFloat and toFixed(2)
//4. add sign '$' before each element
//5. return new array

function cleanTransactionsList(arr) {
  let newArr = arr
    .filter((el) => isFinite(el))
    .map((el) => '$' + parseFloat(el).toFixed(2));
  return newArr;
}

let arrTest = [' 1.925 ', '16.4', 17, ' 1 dollar '];

console.log(cleanTransactionsList(arrTest));
console.log(isFinite('16.4 f'));
