const removeDuplicates = (array: number[]): number[] => {
  const result: number[] = [];

  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
      if (array[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result.push(array[i]);
    }
  }

  return result;
};

console.log(removeDuplicates([1, 1, 2, 8, 5, 5, 6, 8, 10]));
