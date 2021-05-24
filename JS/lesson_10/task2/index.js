function getParsedIntegers(arr) {
  let newArr = [];
  newArr = arr.map((el) => Number.parseInt(el));
  return newArr;
}

function getParsedIntegersV2(arr) {
  let newArr = [];
  newArr = arr.map((el) => parseInt(el));
  return newArr;
}

function getParsedFloats(arr) {
  let newArr = [];
  newArr = arr.map((el) => Number.parseFloat(el));
  return newArr;
}

function getParsedFloatsV2(arr) {
  let newArr = [];
  newArr = arr.map((el) => parseFloat(el));
  return newArr;
}


console.log(getParsedIntegers([Infinity, 45, 32, NaN, -12, 87, -Infinity, '23', 'gh7', '65fd']));
console.log(getParsedIntegersV2([Infinity, 45, 32, NaN, -12, 87, -Infinity, '23', 'gh7', '65fd']));
console.log(getParsedFloats([Infinity, 45, 32, NaN, -12, 87, -Infinity, '23.25', 'gh7', '65.58fd']));
console.log(getParsedFloatsV2([Infinity, 45, 32, NaN, -12, 87, -Infinity, '23.44', 'gh7', '65.89fd']));

console.log(Number.parseInt('23ljk'));