//Write a function to add numbers without using the 'plus operator'

const add = (a: number, b: number): number => {
  let result = 0;

  for (let i = 0; i < a; i++) {
    for (let j = 0; j < 1; j++) {
      result++;
    }
  }

  for (let i = 0; i < b; i++) {
    for (let j = 0; j < 1; j++) {
      result++;
    }
  }

  return result;
};

console.log(add(3, 4));
console.log(add(5,10));
console.log(add(5,6));