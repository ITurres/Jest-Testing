const Calculator = require('../calculator.js');

describe('#add method', () => {
  test('Should return the sum of two integers', () => {
    const result = new Calculator().add(1, 2);

    expect(result).toBe(3);
  });

  test('Should return the sum of more than two integers', () => {
    const result = new Calculator().add(1, 2, 3, 4, 5, 6);

    expect(result).toBe(21);
  });

  test('Should throw an error when trying to pass a NaN as input', () => {
    const calculator = new Calculator();

    expect(() => {
      calculator.add('im not a number');
    }).toThrow('invalid input');
  });
});
