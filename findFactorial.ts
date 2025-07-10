// Write a function to find the factorial of another function.

const getFactorial = (n: number) => {
  if (n < 0) {
    return "error";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
};
console.log(getFactorial(3));
