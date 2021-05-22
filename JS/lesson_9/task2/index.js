const copyObj = (obj) => {
  const newObj = Object.assign({}, obj);
  return newObj;
};

const obj = {
  Bob: 18,
  Anna: 17,
};

console.log(copyObj(obj));
