// Write a function to remove duplicates from an array.

const removeDuplicates = (array: number[]): number[] => {
  const findDuplicateNumbers: number[] = [...new Set(array)];

  return findDuplicateNumbers;
};

console.log(removeDuplicates([1, 1, 2, 8, 5, 5, 6, 8, 10]));
