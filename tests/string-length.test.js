const stringLength = require("../string-length");

describe('stringLength', () => {
  it('returns a string character count', () => {
    const string = 'myString';
    const expected = 8;

    const charCount = stringLength(string);

    expect(charCount).toEqual(expected);
  });
});