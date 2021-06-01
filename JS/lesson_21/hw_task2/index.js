export const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

export const getItemsArray = () => {
  const elementsArray = document.querySelectorAll('.tool');
  const arrList = Array.from(elementsArray);
  console.dir(arrList);
  return arrList;
};

getItemList();
console.log(getItemList());
getItemsArray();
console.log(getItemsArray());
