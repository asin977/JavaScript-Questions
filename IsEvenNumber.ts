//Write a Program to find a sum of an array?

function sumArray(numbers: number[]): number {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

const nums: number[] = [5, 10, 15, 20, 25];
const total = sumArray(nums);

console.log("Array:", nums);
console.log("Sum of array:", total);
