//Capitalize the First Letter of Each Word in a Sentence in JavaScript?

const capitalizeWords = (sentence: string): string => {
  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < sentence.length; i++) {
    let charCode = sentence.charCodeAt(i);

    if (capitalizeNext && charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(charCode - 32);
      capitalizeNext = false;
    } else {
      result += sentence[i];
      capitalizeNext = sentence[i] === " ";
    }
  }

  return result;
};

const output = capitalizeWords("Welcome to the world of flowers");
console.log(output);
