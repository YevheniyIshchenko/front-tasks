const getKeys = (obj) => {
  
  Object.keys(obj).map(keys => console.log(keys));

};

const obj = {
  Bob: 18,
  Anna: 17,
};



console.log(getKeys(obj));
