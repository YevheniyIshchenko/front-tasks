function getMaxAbsoluteNumber(arr) {
  let absoluteNumbers = [];
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  } else {
    absoluteNumbers = arr.map((el) => Math.abs(el));
    let maxNumber = Math.max(...absoluteNumbers);
    return maxNumber;
  }
}

let arr = [-12, 56, 56.44, -58.4, -800];
let arr2 = [];

getMaxAbsoluteNumber(arr2);
