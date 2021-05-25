export function getMinSquareNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  } else {
    const newArr = arr.map((el) => Math.abs(el)).sort((a, b) => a - b);
    let result = Math.pow(newArr[0], 2);
    return result;
  }
}

console.log(getMinSquareNumber([-777, 3, -2, 6, 45, -20]));
