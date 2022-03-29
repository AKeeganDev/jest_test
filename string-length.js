const stringLength = (string) => {
  const stringSize = string.length;
  if (stringSize > 10) {
    throw new Error('String must be 1 or more characters long and less than 10 characters');
  } else if (stringSize < 1) {
    throw new Error('String must be 1 or more characters long and less than 10 characters');
  } else {
    return stringSize;
  }

};

module.exports = stringLength;