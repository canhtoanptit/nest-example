import { notfoundException } from './notfound.exception';
describe('not found exception', () => {
  it('throw exception', () => {
    expect(() => {
      notfoundException('hello');
    }).toThrow(new Error('hello'));
  });
});
