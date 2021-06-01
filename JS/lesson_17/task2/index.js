export const callbackPrompt = {
  message: 'Tell your phone number',
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    setTimeout(() => this.showPrompt(), ms);
  },
};

callbackPrompt.showDefferedPrompt(5000);
