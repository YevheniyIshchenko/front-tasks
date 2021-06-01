export function defer(func, ms) {
  return function () {
    setTimeout(() => func.call(this, ...arguments), ms);
  };
}

callbackPrompt.showDefferedPrompt(5000);
