//Write a function to find second largest number in an array.

const getSecondLargestNumber = (array) => {
  if (array.length < 2) console.log("Array must contain at least two elements");

  let largest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }

  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== largest && array[i] > secondLargest) {
      secondLargest = array[i];
    }
  }

  return secondLargest;
};

console.log(getSecondLargestNumber([1, 5, 7, 8, 79, 45]));
console.log(getSecondLargestNumber([10, 10, 10]));
console.log(getSecondLargestNumber([5]));
