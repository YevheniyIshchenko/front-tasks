import { calc } from './calculator'

it('test calc +', () => {
    const result = calc('2 + 3');

    expect(result).toEqual('2 + 3 = 5');
});

it('test calc -', () => {
  const result = calc('20 - 3');

  expect(result).toEqual('20 - 3 = 17');
});

it('test calc *', () => {
  const result = calc('2 * 3');

  expect(result).toEqual('2 * 3 = 6');
});

it('test calc /', () => {
  const result = calc('15 / 3');

  expect(result).toEqual('15 / 3 = 5');
});

it('test calc exception', () => {
  const result = calc(4);

  expect(result).toEqual(null);
});