// Write a function to get second smallest element in an array.

const getSecondSmallestElement = (array: number[]): number | undefined => {
  if (array.length < 2) return undefined;

  const smallestNumber = [...new Set(array)].sort((a, b) => a - b);

  return smallestNumber[1];
};

console.log(getSecondSmallestElement([4, 1, 7, 1, 3, 9]));
console.log(getSecondSmallestElement([5]));
