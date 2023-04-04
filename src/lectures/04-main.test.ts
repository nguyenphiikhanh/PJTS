import {isPositive} from './04-main'

describe('isPositive()', () => {
  it('shoud return true when n > 0', () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(2)).toBe(true);
    expect(isPositive(3)).toBe(true);
  })
  it('shoud return false when n = 0', () => {
    expect(isPositive(0)).toBe(false);
  })
  it('shoud return false when n < 0', () => {
    expect(isPositive(-1)).toBe(true);
    expect(isPositive(-2)).toBe(true);
    expect(isPositive(-3)).toBe(true);
  })
})