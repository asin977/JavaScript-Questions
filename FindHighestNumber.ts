// Write a function to find the HCF of numbers

const findHighestNumber = (num1: number, num2: number) => {
  let hcf: number = 1;
  let smallerNumber: number;

  if (num1 < num2) {
    smallerNumber = num1;
  } else {
    smallerNumber = num2;
  }

  for (let i = 1; i <= smallerNumber; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      hcf = i;
    }
  }
  return hcf;
};

console.log(findHighestNumber(60, 72));
console.log(findHighestNumber(125, 30));
