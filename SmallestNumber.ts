// Write a function to get second smallest element in an array.

const getSecondSmallestNumber = (array: number[]): number | undefined => {
  if (array.length < 2) return undefined;

  const smallestNumber = [...new Set(array)].sort((a, b) => a - b);

  return smallestNumber[1];
};

console.log(getSecondSmallestNumber([4, 1, 7, 1, 3, 9]));
console.log(getSecondSmallestNumber([5]));
