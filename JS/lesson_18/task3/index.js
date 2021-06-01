export const sumOfSquares = function () {
  return [...arguments].map((el) => el * el).reduce((acc, el) => acc + el);
};

console.log(sumOfSquares(2, 4, 5));
console.log();
