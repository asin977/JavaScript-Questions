const removeDuplicates = (array: number[]): number[] => {
  const result: number[] = [];

  for (const num of array) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  return result;
};

console.log(removeDuplicates([1, 1, 2, 8, 5, 5, 6, 8, 10]));
