//Write a function find the frequency of numbers in an array

const findFrequency = (arr) => {
  const frequency = {};
  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]] += 1;
    } else {
      frequency[arr[i]] = 1;
    }
  }
  return frequency;
};

console.log(findFrequency([1, 2, 2, 3, 3, 4, 1, 2, 2]));
