import { getMinSquareNumber } from './getMinSquareNumbers';

it('get min square number', () => {
  const result = getMinSquareNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});

it('get min square number', () => {
  const result = getMinSquareNumber('some string');

  expect(result).toEqual(null);
});

it('get min square number', () => {
  const result = getMinSquareNumber([]);

  expect(result).toEqual(null);
});
