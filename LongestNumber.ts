// Find the longest word in a string

const getLongestWord = (str: string): string => {
  let longestWord = "";
  let currentWord = "";

  for (let i = 0; i <= str.length; i++) {
    const code = str.charCodeAt(i) || 0;
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      currentWord += str[i];
    } else {
      if (currentWord.length > longestWord.length) longestWord = currentWord;
      currentWord = "";
    }
  }
  return longestWord;
};

const sentence: string = "The people in the bangalore city are always busy";
console.log(getLongestWord(sentence));
