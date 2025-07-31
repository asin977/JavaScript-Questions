//Write a Program to count the occurrences of a character in a string in JavaScript?

const countCharOccurrences = (str: string, char: string): number => {
  let count: number = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
};

const result = countCharOccurrences("hello world", "l");
console.log(countCharOccurrences("mahathma gandhi university", "t"));
console.log(result);
