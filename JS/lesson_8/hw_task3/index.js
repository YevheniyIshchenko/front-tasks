function getKeys(obj) {
  for (const key in obj) {
    console.log(key);
  }
}

const obj = {
  name: 'Tom',
  age: 20
}

console.log(getKeys(obj));