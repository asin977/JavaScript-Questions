// Write a function to check whether a number is prime or not.

const isPrimeNumber = (num: number): boolean => {
  if (num <= 1) return false;

  for (let i = 2; i * i <= num; i++) {
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
