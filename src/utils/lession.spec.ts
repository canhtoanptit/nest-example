import { doWithLession } from './lession';

test('adds 1 + 2 to equal 3', () => {
  expect(
    doWithLession({
      x: 100,
      y: '',
    }),
  ).toBe(3);
});
