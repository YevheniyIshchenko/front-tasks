function calc(str) {
  let arr = str.split(' ');
  let result;
  switch (arr[1]) {
    case '+':
      result = +arr[0] + +arr[2];
      break;
    case '-':
      result = +arr[0] - +arr[2];
      break;
    case '/':
      result = +arr[0] / +arr[2];
      break;
    case '*':
      result = +arr[0] * +arr[2];
      break;
  }

  return `${str} = ${result}`;
}

console.log(calc('2 + 1'));
console.log(calc('10 - 1'));
console.log(calc('10 / 5'));
console.log(calc('2 * 4'));
