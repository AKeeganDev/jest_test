const calculator = require("../calculator");

describe('sum of numbers', () => {

  it('throws an error if any of the values passed into the function are not a number', () => {
    const num1 = 2;
    const num2 = '2';

    expect(() => { calculator.add(num1, num2) }).toThrow();
  });

  it('throws an error if there are not 2 or more numbers to add', () => {
    const num1 = 2;

    expect(() => { calculator.add(num1) }).toThrow();
  });

  it('returns sum of any number of Number values', () => {
    const num1 = 2;
    const num2 = 8;

    const expected = 10;

    expect(calculator.add(num1, num2)).toBe(expected);
  });

  it('returns sum of any number of Number values', () => {
    const num1 = 2;
    const num2 = 8;
    const num3 = 10;

    const expected = 20;

    expect(calculator.add(num1, num2, num3)).toBe(expected);
  });
});

describe('difference of numbers', () => {

  it('throws an error if any of the values passed into the function are not a number', () => {
    const startingNum = 4;
    const num1 = 2;
    const num2 = '2';

    expect(() => { calculator.subtract(startingNum, num1, num2) }).toThrow();
  });

  it('subtracts the following decimals and returns the value', () => {
    const startingNum = 0.6;
    const num1 = 0.2;
    const num2 = 0.3;
    const expected = 0.1;

    expect(calculator.subtract(startingNum, num1, num2)).toBeCloseTo(expected);
  });

  it('Throws an error if there is not at least 1 value passed for subtracting', () => {
    startingNum = 10;

    expect(() => { calculator.subtract(startingNum) }).toThrow();
  });
});

describe('quotient of numbers', () => {

  it('throws an error if any of the values passed into the function are not a number', () => {
    const startingNum = 4;
    const num1 = 2;
    const num2 = '2';

    expect(() => { calculator.subtract(startingNum, num1, num2) }).toThrow();
  });

  it('Throws an error if there is not at least 1 value passed for subtracting', () => {
    const startingNum = 10;

    expect(() => { calculator.divide(startingNum) }).toThrow();
  });

  it('Divides 2 numbers together', () => {
    const startingNum = 4;
    const num1 = 2;
    const expected = 2;

    expect(calculator.divide(startingNum, num1)).toBe(expected);
  });
});

describe('product of numbers', () => {

  it('throws an error if any of the values passed into the function are not a number', () => {
    const startingNum = 4;
    const num1 = 2;
    const num2 = '2';

    expect(() => { calculator.multiply(startingNum, num1, num2) }).toThrow();
  });

  it('Throws an error if there is not at least 1 value passed for multiplying', () => {
    const startingNum = 10;

    expect(() => { calculator.multiply(startingNum) }).toThrow();
  });

  it('Multiplies 2 numbers together', () => {
    const startingNum = 4;
    const num1 = 2;
    const expected = 8;

    expect(calculator.multiply(startingNum, num1)).toBe(expected);
  });

  it('Multiplies multiple numbers together', () => {
    const startingNum = 4;
    const num1 = 2;
    const num3 = 1;
    const num2 = 2
    const expected = 16;

    expect(calculator.multiply(startingNum, num1, num2, num3)).toBe(expected);
  });
});