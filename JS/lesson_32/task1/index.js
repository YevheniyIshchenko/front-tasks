export const asyncSum = (...asyncNumbers) => {
  const getSum = (numbers) =>
    numbers
      .filter((value) => !isNaN(value))
      .reduce((acc, num) => acc + Number(num), 0);

  return Promise.all(asyncNumbers)
    .then((numbers) => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));
};
