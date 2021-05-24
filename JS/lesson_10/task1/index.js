'use strict';

function getFiniteNumbers(arr) {
  let newArr = [];
  newArr = arr.filter((el) => Number.isFinite(el));
  return newArr;
}

function getFiniteNumbersV2(arr) {
  let newArr = [];
  newArr = arr.filter((el) => isFinite(el));
  return newArr;
}

function getNaN(arr) {
  let newArr = [];
  newArr = arr.filter((el) => Number.isNaN(el));
  return newArr;
}

function getNaNV2(arr) {
  let newArr = [];
  newArr = arr.filter((el) => isNaN(el));
  return newArr;
}

function getIntegers(arr) {
  let newArr = [];
  newArr = arr.filter((el) => Number.isInteger(el));
  return newArr;
}

console.log(getFiniteNumbers([Infinity, 45, 32, NaN, -12, 87, -Infinity]));
console.log(getFiniteNumbers2([Infinity, 45, 32, NaN, -12, 87, -Infinity]));
console.log(getNaN([Infinity, 45, 32, NaN, -12, 87, -Infinity]));
console.log(getNaN2([Infinity, 45, 32, NaN, -12, 87, -Infinity]));
console.log(getIntagers([Infinity, 45, 32, NaN, -12.5, 87, -Infinity]));


