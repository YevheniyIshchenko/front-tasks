let message = 'Just learn it';

export const sendMessage = function (name) {
  console.log(`${name}, ${message}! Your Gromcode`);
};

export const setMessage = function (text) {
  message = text;
};

setMessage('Good job');
sendMessage('Anna');
