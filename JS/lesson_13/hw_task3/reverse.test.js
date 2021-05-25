import { reverseArray } from './reverse';

it('reverse array', () => {
  const result = reverseArray([2, 6, 7, 8, 9]);

  expect(result).toEqual([9, 8, 7, 6, 2]);
});

it('reverse array exception', () => {
  const result = reverseArray(34);

  expect(result).toEqual(null);
});

it('reverse array exception', () => {
  const result = reverseArray([]);

  expect(result).toEqual([]);
});