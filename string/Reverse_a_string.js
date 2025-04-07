//Below is the JavaScript function that reverses
//the string and return the reversed Result.

function reverseString(str) {
  const charArray = str.split('');

  const reversedArray = charArray.reverse();

  const reversedStr = reversedArray.join('');

  return reversedStr;
}

console.log(reverseString("hello"));
console.log(reverseString("goodbye!"));


