export const pinger = (num, period) => {
  let index = num;
  console.log('Ping');
  const interval = setInterval(() => {
    if (--index > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};

pinger(7, 1000);
