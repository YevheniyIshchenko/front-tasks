function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  } else {
    let unique = new Set(array);
    let newArr = Array.from(unique);
    return newArr;
  } 
}


let array = [2, 2, 2, 2, 2,1, 1, 1, 1,3, 3, 3, 3, 4, 4, 4, 4]

console.log(removeDuplicates(array));