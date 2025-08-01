//Write a function to find the LCM of two numbers.

const findLowestPrimeNumber = (num1, num2) => {
  let max = num1 > num2 ? num1 : num2;
  let LCM = max;

  while (true) {
    if (LCM % num1 === 0 && LCM % num2 === 0) {
      break;
    }
    LCM += max;
  }
  return LCM;
};

console.log(findLowestPrimeNumber(6, 4));
console.log(findLowestPrimeNumber(24, 15));
