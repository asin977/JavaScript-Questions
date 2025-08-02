// Write a function to find the length of the last word in a sentence

const lengthOfLastWord = (s: string): number => {
  let length = 0;
  let foundWord = false;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (foundWord) {
        return length;
      }
    } else {
      foundWord = true;
      length++;
    }
  }

  return length;
};

console.log(
  lengthOfLastWord("Bangalore city is also known as  city of the flowers")
);
