const capitalizeString = require('../capitalizeString.js');

describe('Capitalize String', () => {
  test('Should return a capitalized string', () => {
    const result = capitalizeString('arthur');

    expect(result).toBe('Arthur');
  });

  test('Should throw error if string length is <= 1', () => {
    expect(() => {
      capitalizeString('a');
    }).toThrow('String must be longer than 1 char');
  });

  test('Should throw error if input is not a string', () => {
    expect(() => {
      capitalizeString(1);
    }).toThrow('Input must be a string');
  });
});
