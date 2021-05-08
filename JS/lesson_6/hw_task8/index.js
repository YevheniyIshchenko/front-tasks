//put your code here
function sortAsyc(array) {
    for (let j = array.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (array[i] > array[i + 1]) {
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
        }
      }
    } return array;
  }

let array = [4, 2, 5, 9, 1, 34, 23];

console.log(sortAsyc(array));

//put your code here
function sortDesc(array) {
    for (let j = array.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (array[i] <  array[i + 1]) {
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
        }
      }
    } return array;
}
console.log(sortDesc(array));
  

