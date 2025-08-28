// Write a function to find the length of the last word in a sentence

const lengthOfLastWord = (s: string): number => {
  let length = 0;
  let i = s.length - 1;

  for (; i >= 0; i--) {
    if (s[i] !== " ") break;
  }

  for (; i >= 0; i--) {
    if (s[i] === " ") break;
    length++;
  }

  return length;
};

console.log(
  lengthOfLastWord("Bangalore city is also known as  city of the flowers")
);
console.log(lengthOfLastWord("Hello World  "));
console.log(lengthOfLastWord("a "));
console.log(lengthOfLastWord("    "));
