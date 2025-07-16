// Write a function to get second smallest element in an array.

const getSecondSmallestNumber = (array) => {
  if (array.length < 2) console.log("Array must contain at least two elements");

  let smallest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }

  let secondSmallest = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== smallest && array[i] < secondSmallest) {
      secondSmallest = array[i];
    }
  }

  return secondSmallest;
};

console.log(getSecondSmallestNumber([4, 1, 7, 1, 3, 9]));
console.log(getSecondSmallestNumber([5]));
