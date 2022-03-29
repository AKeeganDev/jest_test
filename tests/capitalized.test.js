const capitalized = require("../capitalized");

describe('Tests if the first character of a string is capitalized', () => {
  it('tests if the first character of a string is capitalized', () => {
    const string = 'hello';
    expected = 'Hello';

    expect(capitalized(string)).toBe(expected);
  });
});