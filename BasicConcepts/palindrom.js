// JavaScript function to check if it reads the same forwards and backwards
//basically to check palindrome
// Return True id palindrome else false

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  const reversedStr = cleanStr.split('').reverse().join('');

  return cleanStr === reversedStr;
}

console.log(isPalindrome("madam"));
