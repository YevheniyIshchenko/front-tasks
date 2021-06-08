export const compose =
  (...funcs) =>
  (value) =>
    funcs.reduce((acc, func) => func(acc), value);

// const add2 = (value) => value + 2;
// const square = (value) => value * value;
// const half = (value) => value / 2;

// const superFunc = compose(add2, square, half);
// console.log(superFunc(2)); // 8
// console.log(superFunc(5)); // 8
// console.log(superFunc(10)); // 8
