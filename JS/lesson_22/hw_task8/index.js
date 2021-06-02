const checkBox = document.querySelector('.task-status');
const checkBoxStatus = (event) => {
  if (event.target.checked) {
    console.log(true);
  } else {
    console.log(false);
  }
};

checkBox.addEventListener('change', checkBoxStatus);
