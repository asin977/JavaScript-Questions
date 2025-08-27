const reverseArray = (arr: number[]): number[] => {
  const reversedArray: number[] = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
