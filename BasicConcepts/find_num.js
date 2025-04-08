//Write a function in JavaScript to find the largest and/or smallest number
//in a array of integers.

function findLargestandSmallest(arr) {
  if (arr.length < 0) {
    return "Array is empty";
  }

  let largest = arr[0];
  let smallest = arr[0];

  for(let i = 1; i <= arr.length; i++){
    if(arr[i] > largest){
      largest = arr[i];
    }
    if(arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return { largest, smallest };

}

console.log(findLargestandSmallest([9, 1, 2, 6, 7, 8]));