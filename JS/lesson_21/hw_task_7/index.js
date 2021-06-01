export const createButton = (buttonText) => {
  const createBtn = document.createElement('button');
  createBtn.textContent = buttonText;
  const inserBtn = document.querySelector('body');

  inserBtn.append(createBtn);
};

// createButton('Click me');
