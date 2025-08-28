//Write a function that takes a string and returns the count of vowels (a, e, i, o, u) in it.

const countVowels = (str: string): number => {
    const vowels: string = 'aeiouAEIOU';
    let count: number = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
  
    return count;
  };
  

  console.log(countVowels("Hello how are you")); 

