//Write a function that takes a sentences and returns it with each word in reverse order
//but teh structure remains intact

function reverseWords(sentence){
  const words = sentence.split(" ");
  const reversed = words.map(word => word.split("").reverse().join(""));
  return reversed.join(" ");
}

console.log(reverseWords("Sirisha sounds Good"));

