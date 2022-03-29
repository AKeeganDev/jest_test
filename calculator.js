class Calculator {
  add(...nums) {
    if (!nums.length || nums.length < 2) {
      throw new Error('Please enter at least 2 numbers to add')
    }

    if (!nums.every(num => typeof num === 'number')) {
      throw new Error('Please enter only numbers. No alphabetical characters allowed')
    }

    if (nums.length > 1 && nums.every(num => typeof num === 'number')) {
      let sum = 0;
      nums.forEach(num => {
        sum += num
      });
      return sum;
    }
  }

  subtract(initialNumber, ...nums) {
    if (!nums.length || nums.length < 1) {
      throw new Error('Please enter at least 1 number to subtract')
    }

    if (!nums.every(num => typeof num === 'number')) {
      throw new Error('Please enter only numbers. No alphabetical characters allowed')
    }

    if (nums.length > 0 && nums.every(num => typeof num === 'number')) {
      let difference = initialNumber;
      nums.forEach(num => {
        difference -= num;
      });
      return difference;
    }
  }

  divide(initialNumber, ...nums) {
    if (!nums.length || nums.length < 1) {
      throw new Error('Please enter at least 1 number to divide with')
    }

    if (!nums.every(num => typeof num === 'number')) {
      throw new Error('Please enter only numbers. No alphabetical characters allowed')
    }

    if (nums.length > 0 && nums.every(num => typeof num === 'number')) {
      let quotient = initialNumber;
      nums.forEach(num => {
        quotient /= num;
      });
      return quotient;
    }
  }

  multiply(initialNumber, ...nums) {
    if (!nums.length || nums.length < 1) {
      throw new Error('Please enter at least 1 number to multiply with')
    }

    if (!nums.every(num => typeof num === 'number')) {
      throw new Error('Please enter only numbers. No alphabetical characters allowed')
    }

    if (nums.length > 0 && nums.every(num => typeof num === 'number')) {
      let product = initialNumber;
      nums.forEach(num => {
        product *= num;
      });
      return product;
    }
  }
}

module.exports = new Calculator();