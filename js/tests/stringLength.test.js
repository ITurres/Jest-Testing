const stringLength = require('../stringLength.js');

describe('#get [input] string length count', () => {
  test('should return correct count', () => {
    const value = stringLength('Testing');

    expect(value).toBe(7);
  });

  test('should throw error when count < 1', () => {
    expect(() => {
      stringLength('');
    }).toThrow('String is too short / long');
  });

  test('should throw error when count > 10', () => {
    expect(() => {
      stringLength('This is a long string');
    }).toThrow('String is too short / long');
  });
});
