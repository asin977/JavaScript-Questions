const findUnionSingleLoop = <T>(arr1: T[], arr2: T[]): T[] => {
  const unionArray: T[] = [];
  const combinedArray = [...arr1, ...arr2];

  for (let i = 0; i < combinedArray.length; i++) {
    const item = combinedArray[i];
    if (!unionArray.includes(item)) {
      unionArray.push(item);
    }
  }

  return unionArray;
};

console.log(findUnionSingleLoop([1, 2, 3], [2, 3, 4]));
