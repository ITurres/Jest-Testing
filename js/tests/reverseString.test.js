const reverseString = require('../reverseString.js');

describe('#get string reversed', () => {
  test('should return the reversed string', () => {
    const reversedString = reverseString('Microverse');

    expect(reversedString).toBe('esrevorciM');
  });

  test('should throw error if string length is <= 1', () => {
    expect(() => {
      reverseString('t');
    }).toThrow('String must be at least two chars long');
  });
});
