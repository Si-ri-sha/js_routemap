// Write a javascript function that takes a string and returns
//the number of vowels( a, e, i, o, u) present in it.

function countVowels(str){
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str){
    if (vowels.includes(char)){
      count++;
    }
  }

  return count;
}

console.log(countVowels("Sirisha sounds good"));