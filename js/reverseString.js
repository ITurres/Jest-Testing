const reverseString = (str) => {
  const strArray = str.split('');
  if (strArray.length <= 1) {
    throw new Error('String must be at least two chars long');
  }
  return strArray.reverse().join('');
};

module.exports = reverseString;
