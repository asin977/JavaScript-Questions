// Calculate the power of a number in Javascript?

const RealNumber = (num: number): number => {
  return num < 0 ? -num : num;
};

const isInteger = (num: number): boolean => {
  return num === (num | 0);
};

const powerOfNumber = (base: number, exponent: number): number => {
  if (!isInteger(exponent)) {
    console.log("Exponent must be an integer");
    return NaN;
  }

  if (exponent === 0) {
    return 1;
  }

  let isNegative = exponent < 0;
  let exp = Math.abs(exponent);
  let result = 1;

  for (let i = 0; i < exp; i++) {
    result *= base;
  }

  return isNegative ? 1 / result : result;
};

console.log(powerOfNumber(2, 3));
console.log(powerOfNumber(5, -2));
console.log(powerOfNumber(3, 0));
console.log(powerOfNumber(4, 2.5));
