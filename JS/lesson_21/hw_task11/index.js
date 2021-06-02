export const squaredNumbers = () => {
  const liNumber = document.querySelectorAll('.number');
  console.log(liNumber);
  [...liNumber].map(elem => {
    elem.dataset.squaredNumber = elem.dataset.number ** 2;
  });
  

};

// squaredNumbers();
