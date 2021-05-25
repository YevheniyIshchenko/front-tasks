import { getAdults } from './adult';

it('age 18+', () => {
  const result = getAdults({
    'John Doe': 19,
    Tom: 17,
    Bob: 18,
  });

  expect(result).toEqual({
    'John Doe': 19,
    Bob: 18,
  });
});

it('age 18+', () => {
  const result = getAdults({});

  expect(result).toEqual({});
});

it('age 18+', () => {
  const result = getAdults({
    'John Doe': 19,
    Tom: 25,
    Bob: 18,
  });

  expect(result).toEqual({
    'John Doe': 19,
    Tom: 25,
    Bob: 18,
  });
});
