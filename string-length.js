const stringLength = (string) => {
  const stringSize = string.length;
  if (stringSize < 10 && stringSize > 0) {
    return string.length
  } else {
    throw new Error('String must be 1 or more characters long and less than 10 characters');
  }

};

module.exports = stringLength;