import { withdraw } from './withdraw'

it('cliets balances', () => {
    const result = withdraw(['Den', 'Anna', 'Ben'], [50, 60, 0], 'Anna', 30);

    expect(result).toEqual(30)
});

it('cliets balances', () => {
  const result = withdraw(['Den', 'Anna', 'Ben'], [50, 60, 0], 'Anna', 80);

  expect(result).toEqual(-1);
});

it('cliets balances', () => {
  const result = withdraw(['Den', 'Anna', 'Ben'], [50, 60, 0], 'Den', 40);

  expect(result).toEqual(10);
});