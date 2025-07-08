// 1. Write a function to sort input array.(Don't use sort() function of javascript).

const sortArray = (array: number[]): number[] => {
  let n = array.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let value = array[j];
        array[j] = array[j + 1];
        array[j + 1] = value;
      }
    }
  }
  return array;
};

console.log(sortArray([5, 29, 12, 3, 8, 7]));
console.log(sortArray([5, 2, 1, 0, 78, 9, 45]));
