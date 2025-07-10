const reverseArray = (arr: number[]): number[] => {
  const reversed: number[] = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
