const addMultipleArrays = (...arrays: number[][]): number[] => {
  let minLength = arrays[0].length;

  for (let i = 1; i < arrays.length; i++) {
    if (arrays[i].length < minLength) {
      minLength = arrays[i].length;
    }
  }

  let result: number[] = [];

  for (let i = 0; i < minLength; i++) {
    let sum = 0;

    for (let j = 0; j < arrays.length; j++) {
      sum = sum + arrays[j][i];
    }

    result[i] = sum;
  }

  return result;
};
const array1 = [2, 4, 6];
const array2 = [1, 3, 5];
const array3 = [5, 10, 5];

const summed = addMultipleArrays(array1, array2, array3);
console.log(summed);
