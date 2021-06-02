export const finishForm = () => {
  const inputLogin = document.createElement('input');
  inputLogin.setAttribute('type', 'text');
  inputLogin.setAttribute('name', 'login');

  const formElement = document.querySelector('.login-form');
  formElement.append(inputLogin);

  const foormInput = document.querySelector('input[name="password"]');
  foormInput.setAttribute('type', 'password');
};

finishForm();
