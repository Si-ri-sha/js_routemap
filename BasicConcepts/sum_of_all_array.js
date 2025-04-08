//write a function in JavaScript that takes an array of numbers
//and retuens the sum of all elements in that array

function sumArray(arr){

  let sum = 0;

  for (let i =0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));