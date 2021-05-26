let memory = 0;

export const add = function (number) {
  memory += number;
};

export const decrease = function (number) {
  memory -= number;
};

export const reset = function () {
  memory = 0;
};

export const getMemo = function () {
  return memory;
};

console.log(memory);
add(5);
console.log(memory);
decrease(2);
console.log(memory);
getMeno();
console.log(memory);
reset();
console.log(memory);
