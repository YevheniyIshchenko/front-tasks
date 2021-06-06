export const getDiff = (startDate, endDate) => {
  const diff = new Date(endDate.getTime() - startDate.getTime());
  const yers = diff.getUTCFullYear() - 1970;
  const months = diff.getUTCMonth();

  let days;
  if (yers > 0) {
    days = diff.getUTCDate() + yers * 365;
  } else {
    days = diff.getUTCMonth() + months * 30;
  }
  const hours = diff.getUTCHours();
  const minutes = diff.getUTCMinutes();
  const seconds = diff.getUTCSeconds();
  // console.log('yers', yers);
  // console.log('months', months);
  // console.log('days', days);
  // console.log('hours', hours);
  // console.log('minutes', minutes);
  // console.log('seconds', seconds);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

// const start = new Date(2020, 5, 10, 10, 20, 10);
// const end = new Date(2020, 6, 15, 15, 30, 16);

// const result = getDiff(start, end);
// console.log(result);
