// Write a function to check whether a number is prime or not.

const isPrimeNumber = (num) => {
  if (num <= 1) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrimeNumber(0));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(10));
