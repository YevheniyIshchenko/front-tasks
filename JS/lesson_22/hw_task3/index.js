const checkBox = document.querySelector('.task-status');
const checkBoxStatus = () => {
  if (checkBox.checked) {
    console.log(true);
  } else {
    console.log(false);
  }
};
checkBox.addEventListener('change', checkBoxStatus);
