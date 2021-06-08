export const mult = (a) => (b) => a * b;
export const twice = (value) => mult(value)(2);
export const triple = (value) => mult(value)(3);

// console.log(mult(5)(5));
// console.log(twice(5));
// console.log(triple(7));
