import getSum, { getSquaredArray, getOddNumbers } from './calculator';

it('shoud get squared numbers', () => {
  const result = getSquaredArray([1, 2, 3]);

  expect(result).toEqual([1, 4, 9]);
});

it('shoud keep odd numbers only', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);

  expect(result).toEqual([1, 3, 5]);
});

it('get sums of numbers', () => {
  const result = getSum(5, 10);

  expect(result).toEqual(15);
});
