const findUnionOfArrays = <T>(arr1: T[], arr2: T[]): T[] => {
  return [...new Set([...arr1, ...arr2])];
};

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const resultUnion = findUnionOfArrays(array1, array2);
console.log(resultUnion);

const stringArray1 = ["apple", "banana", "orange"];
const stringArray2 = ["banana", "grape", "kiwi"];
const resultStringUnion = findUnionOfArrays(stringArray1, stringArray2);
console.log(resultStringUnion);
