const clickBtn = document.querySelectorAll('.btn');
const handleClick = (event) => {
  console.log(event.target.textContent);
};

clickBtn[0].addEventListener('click', handleClick);
clickBtn[1].addEventListener('click', handleClick);
