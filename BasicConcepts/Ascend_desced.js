//write a function in js that takes an array of numbers
//and retuens it sorted in ascending or descending order.



function sortAscending(arr){
  return arr.sort(( a, b ) => a - b);

  // for descending
  //return arr.sort((a, b) => b - a);
}

console.log(sortAscending([2, 4, 3, 1, 5, 8, 6]))