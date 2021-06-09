export const asyncCalculator = (number) => {
  const pr = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial valua: ${number}`);
      resolve(number);
    }, 500);
  })
    .then((value) => {
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          const result = value * value;
          console.log(`Squared value: ${result}`);
          resolve(result);
        }, 500);
      });
      return promise;
    })
    .then((value) => {
      const result = value * 2;
      console.log(`Doubled value: ${result}`);
    });

  return pr;
};

asyncCalculator(2);
asyncCalculator(3);
