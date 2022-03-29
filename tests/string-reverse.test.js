const stringReverse = require("../string-reverse");

describe('stringReverse', () => {
  it('returns a passed string back reversed', () => {
    const string = 'reverse';
    const expected = 'esrever';

    expect(stringReverse(string)).toBe(expected);
  });
});