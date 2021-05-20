const flatArray = (arr) => {
  // put your code here
  const flatArray = arr.reduce((acc, elem) => {
    return acc.concat(elem);
  }, []);

  flatArray.sort((a, b) => a - b);

  return flatArray;
};

let arr = [4, 56, 30, [5, 8, 1, 65], 3, 90, 34, 18];

console.log(arr);

console.log(flatArray(arr));

console.log(arr);
