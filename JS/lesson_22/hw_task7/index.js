const inputText = document.querySelector('.text-input');
const inputConsole = (event) => {
  console.log(event.target.value);
};

inputText.addEventListener('change', inputConsole);
