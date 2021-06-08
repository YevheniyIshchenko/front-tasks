const calc = (initialValue) => {
  let result = initialValue;
  const calculator = {
    add(value) {
      result += value;
      return calculator;
    },
    subtract(value) {
      result -= value;
      return calculator;
    },
    mult(value) {
      result *= value;
      return calculator;
    },
    div(value) {
      result /= value;
      return calculator;
    },
    result() {
      return result;
    },
  };

  return calculator;
};

// const res = calc(10).add(2).mult(4).div(10).subtract(5).result(); // -3

// console.log(res);
