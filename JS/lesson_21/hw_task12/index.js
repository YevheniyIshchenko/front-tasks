export const getSection = (num) => {
  const spanElem = document.querySelector(
    `span[data-number="${num.toString()}"]`
  );
  console.log(spanElem);
  const parentElem = spanElem.closest('.box');
  return parentElem.getAttribute('data-section');
};

// console.log(getSection(1));
// console.log(getSection(3));
// console.log(getSection(4));
// console.log(getSection(6));
