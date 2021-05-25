// const reverseString = (string) => {
//   if (typeof string !== 'string') {
//     return null;
//   } else {
//     return string.split('').reverse().join('');
//   }
// };

function reverseString(string) {
  if (typeof string !== 'string') {
    return null;
  } else {
    return string.split('').reverse().join('');
  }
}

console.log(reverseString('qwer'));
console.log(reverseString(4));
console.log(reverseString(''));
