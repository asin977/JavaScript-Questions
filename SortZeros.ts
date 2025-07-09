// Write a function to move all zeros in an array to the end.

const sortZerosInArray = (array: number[]): number[] => {
  const nonZeros = array.filter((num) => num !== 0);
  const zeros = array.filter((num) => num === 0);

  return [...nonZeros, ...zeros];
};

console.log(sortZerosInArray([1, 5, 7, 8, 0, 7, 9, 0, 10]));
