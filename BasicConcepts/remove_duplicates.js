//write a function in JavaScript that takes an array and returns
//a new array with duplicate values removed.

function removeDuplicates(arr) {

  let uniqueArr = [];

  for ( let i =0; i < arr.length; i++){
    if(!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
    
  }

  return uniqueArr;
}

console.log(removeDuplicates([1, 2, 3, 3, 3, 4, 5 , 5, 6 ]));