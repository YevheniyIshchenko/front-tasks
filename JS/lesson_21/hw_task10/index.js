export const manageClasses = () => {
  const firstLi = document.querySelector('.one');
  firstLi.classList.add('selected');

  const secondLi = document.querySelector('.two');
  secondLi.classList.remove('selected');

  const thirdLi = document.querySelector('.three');
  thirdLi.classList.toggle('three_done');

  const fourthli = document.querySelector('.four');

  if (fourthli.classList.contains('some-class')) {
    fourthli.classList.add('another-class');
  }
};

// manageClasses();
