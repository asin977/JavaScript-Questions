//Write a function to find second largest number in an array.

const getSecondLargestNumber = (array: number[]): number | string => {
  const findUniqueNumbers: number[] = [...new Set(array)];

  if (findUniqueNumbers.length < 2) {
    return "There is no second largest number";
  }

  findUniqueNumbers.sort((a: number, b: number): number => b - a);

  return findUniqueNumbers[1];
};

console.log(getSecondLargestNumber([1, 5, 7, 8, 79, 45]));
console.log(getSecondLargestNumber([10, 10, 10]));
console.log(getSecondLargestNumber([5]));
