//Write a Program to find a sum of an array?

const GetsumArray = (numbers: number[]): number => {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
};

const nums: number[] = [10, 12, 20, 29, 28];
const total = GetsumArray(nums);

console.log("Array:", nums);
console.log("Sum of array:", total);
