export const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
};

export const getInputElement = () => {
  const inputElem = document.querySelector('input');
  console.dir(inputElem);
  return inputElem;
};

getTitleElement();
console.log(getTitleElement());
getInputElement();
console.log(getInputElement());
