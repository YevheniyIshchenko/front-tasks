function filterNames(arr, text) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    let result = arr.filter(
      (name) => name.indexOf(text) !== -1 && name.length > 5
    );
    return result;
  }
}

let names = ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'];

console.log(filterNames(names, 'ya'));
