export const createCalculator = function () {
  let memory = 0;

  return {
    add(number) {
      return (memory += number);
    },
    decrease(number) {
      return (memory -= number);
    },
    reset() {
      return (memory = 0);
    },
    getMemo() {
      return memory;
    },
  };
};

let calc1 = createCalculator();
let calc2 = createCalculator();

console.log(calc1.getMemo());
console.log(calc1.add(5));
console.log(calc1.decrease(2));
console.log(calc1.reset());
console.log(calc1.getMemo());
console.log(calc1.add(5));

console.log('====================');

console.log(calc2.getMemo());
console.log(calc2.add(6));
console.log(calc2.decrease(3));
console.log(calc2.reset());
console.log(calc2.getMemo());
console.log(calc2.add(4));
