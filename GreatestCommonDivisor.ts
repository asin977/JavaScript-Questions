//write a function to find  the Greatest Common Divisor (GCD)

const GreatestCommonDivisor = (a: number, b: number): number => {
  if (a < 0) a = -a;
  if (b < 0) b = -b;

  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }

  return a;
};

console.log(GreatestCommonDivisor(12, 18));
console.log(GreatestCommonDivisor(100, 25));
console.log(GreatestCommonDivisor(7, 3));
console.log(GreatestCommonDivisor(-24, 36));
