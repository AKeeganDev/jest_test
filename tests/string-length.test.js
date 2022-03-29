const stringLength = require("../string-length");

describe('stringLength', () => {
  it('returns a string character count', () => {
    const string = 'myString';
    const expected = 8;

    const charCount = stringLength(string);

    expect(charCount).toEqual(expected);
  });

  test('throw and error if String Length is less than 1', () => {
    const string = '';
    expect(() => { stringLength(string); }).toThrow();
  });

  test('throw and error if String Length is less than 1', () => {
    const string = 'This has more than 10 characters';
    expect(() => { stringLength(string); }).toThrow();
  });
});
