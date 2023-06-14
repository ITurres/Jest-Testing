class Calculator {
  isValid(nums) {
    return nums.every((num) => typeof num === 'number' && !Number.isNaN(num));
  }

  throwError(error = 'invalid input') {
    throw new Error(error);
  }

  add(...nums) {
    if (this.isValid(nums)) {
      return nums.reduce((a, b) => a + b);
    }
    return this.throwError();
  }

  substract(...nums) {
    if (this.isValid(nums)) {
      return nums.reduce((a, b) => a - b);
    }
    return this.throwError();
  }

  divide(num1, num2) {
    if (this.isValid([num1, num2])) {
      if (num1 > 0 && num2 > 0) {
        return num1 / num2;
      }
      return this.throwError('Can not divide by 0');
    }
    return this.throwError();
  }

  multiply(num1, num2) {
    if (this.isValid([num1, num2])) {
      return num1 * num2;
    }
    return this.throwError();
  }
}

module.exports = Calculator;
