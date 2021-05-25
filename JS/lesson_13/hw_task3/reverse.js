export function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    let newArr = arr.slice();
    newArr.reverse();
    return newArr;
  }
}


