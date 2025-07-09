// Write a function to find the largest number in an array.

const getLargestNumber = (array) => {
  if (array.length === 0) return "array is empty";
  return Math.max(...array);
};

console.log(getLargestNumber([5, 2, 8, 7, 9, 45]));
console.log(getLargestNumber([4, 8, 79, 5, 6, 19]));
