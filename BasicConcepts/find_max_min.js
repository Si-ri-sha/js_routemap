//write a JavaScript function to return largest ans amllest numbers in a given array

function findMaxMin(arr){
  if (arr.length === 0){
    return "The Array is empty!";
  }

  /* using built-in objects of js
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return { max, min};
}
*/

  let max = arr[0];
  let min = arr[0];

  for( let i =0; i < arr.length; i++){
    if(arr[i] > max)
      max = arr[i];

    if(arr[i] < min)
      min = arr[i];
  }

  return{ max, min};

}

console.log(findMaxMin([2, 4, 5, 6, 8]));