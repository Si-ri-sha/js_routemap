//Write a Function in JavaScript that takes a number n as input and 
//returns the factorial of that Number.
//and for a non-negative integer n is the product of all 
//positive integers less than or equal to n.



//Factorial formula = n! = n × (n - 1) × (n - 2) × ... × 1

function factorial(n) {
  if (n < 0) {
    return "Factorial not defined for a negative numbers. ";
  }

  let result = 1;

  for (let i = 1; i <= n; i++ ){
    result *= i;
  }

  return result;
}

console.log(factorial(0));