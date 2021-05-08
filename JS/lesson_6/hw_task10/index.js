const getSubArray = (arr, numberOfElements) => {
  // put your code here
  let newArr = [];
  for (let i = 0; i < numberOfElements; i++){
    newArr[i] = arr[i];
  }
  return newArr;
};

let arr = [1, 3, 4, 3, 5, 6];
console.log(getSubArray(arr, 5));
