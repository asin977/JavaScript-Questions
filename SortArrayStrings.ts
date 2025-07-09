//  Write a function that sorts an array of strings in alphabetical order.

const sortStringsAlphabetically = (array: string[]): string[] => {
  const result = [...array];
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j].localeCompare(result[j + 1]) > 0) {
        const value = result[j];
        result[j] = result[j + 1];
        result[j + 1] = value;
      }
    }
  }

  return result;
};


console.log(sortStringsAlphabetically(["books", "school", "pens", "teacher"]));