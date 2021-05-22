const transformToObject = (arr) => {
  // put your code here
  let obj = {};
  arr.forEach((el) => {
    obj[el] = el;
  });
  console.log(obj);
  return obj;
};

// examples
transformToObject(['a', 17.1, 'John Doe']); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }

