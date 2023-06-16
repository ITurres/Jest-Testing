const capitalizeString = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  const splittedString = str.split('');
  if (splittedString.length <= 1) {
    throw new Error('String must be longer than 1 char');
  }

  let [firstChar, ...rest] = splittedString;
  firstChar = firstChar.toUpperCase();
  const capitalizeString = [firstChar, ...rest].join('');
  return capitalizeString;
};

module.exports = capitalizeString;
