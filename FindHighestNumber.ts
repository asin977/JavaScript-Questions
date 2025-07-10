// Write a function to find the largest number in an array.

const getLargestNumberManual = (array) => {
  if (array.length === 0) console.log("array is empty");

  let largest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }

  return largest;
};

console.log(getLargestNumberManual([5, 2, 8, 7, 9, 45]));
console.log(getLargestNumberManual([4, 8, 79, 5, 6, 19]));
