const clickBtn = document.querySelector('.single-use-btn');

const checkedClick = () => {
  console.log('clicked');
  clickBtn.removeEventListener('click', checkedClick);
};

clickBtn.addEventListener('click', checkedClick);
