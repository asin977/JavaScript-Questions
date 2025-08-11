//Find the Union of Two Arrays in JavaScript typecript.

const findUnionOfArrays = <T>(arr1: T[], arr2: T[]): T[] => {
  const unionArray: T[] = [];

  for (let i = 0; i < arr1.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < unionArray.length; j++) {
      if (unionArray[j] === arr1[i]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      unionArray.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < unionArray.length; j++) {
      if (unionArray[j] === arr2[i]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      unionArray.push(arr2[i]);
    }
  }

  return unionArray;
};

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const resultUnion = findUnionOfArrays(array1, array2);
console.log(resultUnion);

const stringArray1 = ["apple", "banana", "orange"];
const stringArray2 = ["banana", "grape", "kiwi"];
const resultStringUnion = findUnionOfArrays(stringArray1, stringArray2);
console.log(resultStringUnion);
