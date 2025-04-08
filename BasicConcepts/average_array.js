//write a function in JavaScript that takes an array of numbers
//and returns the average (mean) of all elements in that arrray

//formula : average = total sum/ total number of elements

function averageArray(arr) {

  if (arr.length === 0){
    return "The Array is Empty.";
  }

  let sum = 0;
  for( let i = 0; i <arr.length; i++) {
    sum += arr[i];
  }
  
  let average = sum/ arr.length;

  return average;
}

console.log(averageArray([1, 2, 3, 4, 5]));

