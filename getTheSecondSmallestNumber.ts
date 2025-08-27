const getTheSecondSmallestNumber = (array) => {
  if (array.length < 2) return;

  let smallest = array[0];
  let secondSmallest;

  for (let i = 1; i < array.length; i++) {
    const num = array[i];

    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (
      num !== smallest &&
      (secondSmallest === undefined || num < secondSmallest)
    ) {
      secondSmallest = num;
    }
  }

  return secondSmallest;
};

console.log(getTheSecondSmallestNumber([4, 1, 7, 1, 3, 9]));
console.log(getTheSecondSmallestNumber([5]));
console.log(getTheSecondSmallestNumber([5, 5, 5]));
console.log(getTheSecondSmallestNumber([5, 4]));
console.log(getTheSecondSmallestNumber([2, 1, 2]));
