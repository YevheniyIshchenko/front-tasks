export const createArrayOfFunctions = function (num = []) {
  if (typeof num !== 'number' && typeof num !== 'object') {
    return null;
  } else {
    let arr = [];
    for (let i = 0; i < num; i += 1) {
      arr[i] = function () {
        return i;
      };
    }
    return arr;
  }
};

let result = createArrayOfFunctions(5);

// console.log(result);

console.log(result[2]());
