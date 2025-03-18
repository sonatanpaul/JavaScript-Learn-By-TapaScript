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
/*
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
*/

/*
function createBankAccount(initialBlance) {
  let blance = initialBlance;
  console.log("Initilazation Blance", blance);
  return {
    deposit: (amount) => {
      blance = blance + amount;
      console.log("Deposit Amount", amount, "Current Blance", blance);
    },
    withdraw: (amount) => {
      if (amount > blance) {
        console.warn("Taka Nai");
      } else {
        blance = blance - amount;
        console.log("Withdraw Amount", amount, "Current Blance", blance);
      }
    },
    checkBlance: () => {
      console.log("Your Current Blance is", blance);
    },
  };
}
const sonatanAccount = createBankAccount(200);
sonatanAccount.deposit(300); // deposit ammount 300
sonatanAccount.withdraw(100);
sonatanAccount.withdraw(50);
sonatanAccount.withdraw(50);
sonatanAccount.withdraw(50);
sonatanAccount.withdraw(50);
sonatanAccount.withdraw(50);
sonatanAccount.withdraw(50);
sonatanAccount.withdraw(50);
sonatanAccount.withdraw(50);
sonatanAccount.checkBlance();

*/

// Usefulness of Closure

// 1. You can keep the variables private without exposing them.
// 2. You can stop variable pollution.
// 3. You can create a function factory.
// 4. You can keep a variable alive between multiple calls.

/*
function timer() {
  let number = 0;
  document.getElementById("handleClick").addEventListener("click", function () {
    number++;
    console.log("Button Clicked", number, "items");
  });
}

timer();
*/
