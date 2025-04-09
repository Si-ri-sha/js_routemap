//write a function that returns the nth fibonacci number

// fibonacci sequence : 0, 1, 1, 2, 3, 5, 8, 13, 21, so on

function fibonacci(n){
  if (n < 0) return "Invalid input"
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1, temp;

  for (let i = 2; i <=n; i++){
    temp = a + b;
    a = b;
    b = temp;
  }

  return b;  
}

console.log(fibonacci(2));