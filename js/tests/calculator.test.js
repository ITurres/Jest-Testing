const Calculator = require('../calculator.js');

describe('#add method', () => {
  test('Should return the sum of two integers', () => {

    const result = new Calculator().add(1, 2);

    expect(result).toBe(3);
  });

  test('Should return the sum of more than two numbers', () => {

    const result = new Calculator().add(1, 2, 3, 4, 5, 6);

    expect(result).toBe(21);
  });

  test('Should throw an error if input is not a valid number', () => {

    const calculator = new Calculator();

    expect(() => {
      calculator.add('im not a number', 5);
    }).toThrow('invalid input');
  });
});

describe('#substract method', () => {
  test('Should return the substraction of two numbers', () => {

    const result = new Calculator().substract(50, 25);

    expect(result).toBe(25);
  });

  test('Should return the substraction of multiple numbers', () => {

    const result = new Calculator().substract(50, 25, 30, 5);

    expect(result).toBe(-10);
  });

  test('Should throw error if input is not a valid number', () => {

    const calculator = new Calculator();

    expect(() => {
      calculator.substract(10, 'i am not an number');
    }).toThrow('invalid input');
  });

  test('Should throw error if one of the input is not a valid number', () => {

    const calculator = new Calculator();

    expect(() => {
      calculator.substract(20, 10, 'i am not an number', 5);
    }).toThrow('invalid input');
  });
});

describe('#divide method', () => {
  test('Should return the division between two integers', () => {

    const result = new Calculator().divide(25, 5);

    expect(result).toBe(5);
  });

  test('Should throw error if input is not a number', () => {

    const calculator = new Calculator();

    expect(() => {
      calculator.divide('25', 5);
    }).toThrow('invalid input');
  });

  test('Should throw error if second parameter is 0, therefore can not divide by 0', () => {

    const calculator = new Calculator();

    expect(() => {
      calculator.divide(25, 0);
    }).toThrow('Can not divide by 0');
  });
});

describe('#multiply method', () => {
  test('Should return the multiplication of two numbers', () => {

    const result = new Calculator().multiply(5, 5);

    expect(result).toBe(25);
  });

  test('Should return the multiplication of negative numbers', () => {

    const result = new Calculator().multiply(-10, -25);

    expect(result).toBe(250);
  });

  test('Should throw an error if input is not a valid numbert', () => {
    
    const calculator = new Calculator();

    expect(() => {
      calculator.multiply(2, 'im not a number');
    }).toThrow('invalid input');
  });
});
