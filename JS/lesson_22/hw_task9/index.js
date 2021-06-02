const checkBtn = document.querySelectorAll('.pagination__page');
const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};

// checkBtn[0].addEventListener('click', handleClick);
// checkBtn[1].addEventListener('click', handleClick);
// checkBtn[2].addEventListener('click', handleClick);

[...checkBtn].map((el) => el.addEventListener('click', handleClick));
