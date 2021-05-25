export const getAdults = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};

const obj3 = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
};

console.log(getAdults(obj3));
