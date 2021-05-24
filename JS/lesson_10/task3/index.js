function multiRound(num) {
  let arr = [
    Math.floor(num * 100) / 100,
    Math.round(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    +num.toFixed(2),
  ];

  return arr;
}

console.log(multiRound(-12.36583));