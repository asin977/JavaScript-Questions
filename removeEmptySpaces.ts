const removeEmptySpaces = (string: string): string => {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    const spaces = string[i];

    if (spaces !== " ") {
      result += spaces;
    }
  }

  return result;
};

console.log(removeEmptySpaces("h e l l o "));
console.log(removeEmptySpaces("Hello  World"));
