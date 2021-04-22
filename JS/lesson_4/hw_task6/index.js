let sum = 0;
for (let i = 0; i <= 1000; i++){
  sum += i;
}
let whole = Math.round(sum / 1234);
let part = sum % 1234;
console.log(whole > part ? true : false);

