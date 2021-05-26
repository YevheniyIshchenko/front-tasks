export default function createMessegnger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';
  return {
    sendMessage(name) {
      console.log(`${name}, ${message}! Your ${sender}`);
    },
    setMessage(text) {
      message = text;
    },
    setSender(newSender) {
      sender = newSender;
    },
  };
}

const message = createMessegnger();
message.sendMessage('Anna');
message.setMessage('Good Job');
message.setSender('Bear');
message.sendMessage('Anna');
