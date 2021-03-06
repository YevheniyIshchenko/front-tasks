const baseUrl = 'https://60c9e9df772a760017204c05.mockapi.io/api/v1/form';

const formElem = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const passwordElem = document.getElementById('password');
const errorText = document.querySelector('.error-text');

const validateForm = () => {
  if (formElem.reportValidity()) {
    submitBtn.removeAttribute('disabled');
  }
};

formElem.addEventListener('input', validateForm);

const clearForm = () => {
  document.getElementById('email').value = '';
  document.getElementById('name').value = '';
  document.getElementById('password').value = '';
};

const createUser = (userData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((response) => {
      alert(JSON.stringify(response));
      clearForm();
    })
    .catch(() => {
      errorText.textContent = 'Failed to create user';
    });

const onCreateUser = () => {
  const user = {
    email: document.getElementById('email').value,
    name: document.getElementById('name').value,
    password: document.getElementById('password').value,
  };
  createUser(user);
};

submitBtn.addEventListener('click', onCreateUser);
