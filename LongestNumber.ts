// Find the longest word in a string

let longestWord = "";
let currentWord = "";

const GetLongestWord = (string) => {
    for (let i=0;i<=string.length;i++) {
        const char = string[i] || '';
        if ((char >= 'a' && char <= 'z') || (char >='A' && char <='z')) {
            currentWord += char;
        }else {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = '';
        }
    }
    return longestWord;
}

const sentence:string = 'The people in the bangalore city are always busy'
console.log(GetLongestWord(sentence));
