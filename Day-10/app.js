// Closure :
/*
a closure is created when a function is defined inside another function 
and gains access to the outer function's variables,
even after the outer function has finished executing.
Closures allow the inner function to "remember" the environment 
it was created in. */

/*
function outer() {
  let x = 20;
  return function inner() {
    console.log(x);
  };
}
const result = outer();
result();
// inner function close or outer function variable use when outer function execution
*/

/*
function outerCount() {
  let count = 0;
  return function innerCount() {
    count++;
    console.log(count);
  };
}
let result = outerCount();
console.log(result()); // 1
console.log(result()); // 2
console.log(result()); // 3
console.log(result()); // 4
*/

// Real World Example
function createBankAccount(initialBlance) {
  let blance = initialBlance;
  console.log(blance);
  return function deposit(amount) {
    blance = blance + amount;
    console.log("Deposit Amount", amount, "Current Blance", blance);
  };
}
const paulBankAccount = createBankAccount(200);
console.log(paulBankAccount(400)); // 600
console.log(paulBankAccount(1000)); //1600
