const getSecondSmallestNumber = (array) => {
  if (array.length < 2) {
    console.log("Array must contain at least two elements");
    return undefined;
  }

  let smallest, secondSmallest;

  if (array[0] < array[1]) {
    smallest = array[0];
    secondSmallest = array[1];
  } else if (array[0] > array[1]) {
    smallest = array[1];
    secondSmallest = array[0];
  } else {
    smallest = secondSmallest = array[0];
  }

  for (let i = 2; i < array.length; i++) {
    const num = array[i];

    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (
      num !== smallest &&
      (secondSmallest === smallest || num < secondSmallest)
    ) {
      secondSmallest = num;
    }
  }

  if (smallest === secondSmallest) {
    return undefined;
  }

  return secondSmallest;
};

console.log(getSecondSmallestNumber([4, 1, 7, 1, 3, 9]));
console.log(getSecondSmallestNumber([5]));
console.log(getSecondSmallestNumber([5, 5, 5]));
console.log(getSecondSmallestNumber([5, 4]));
console.log(getSecondSmallestNumber([2, 1, 2]));
