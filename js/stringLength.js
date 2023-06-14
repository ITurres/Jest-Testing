const stringLength = (str) => {
  const strLength = str.split('').length;
  if (strLength < 1 || strLength > 10) {
    throw new Error('String is too short / long');
  }
  return strLength;
};

module.exports = stringLength;
