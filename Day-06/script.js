// How to difine or declare a Function
function printThis() {
  console.log("Printing.....");
}
// Call or invoke a Function
printThis();

// Function as an Expression
let printMe = function () {
  console.log("PrintMe...");
};

// Call or Invoke a Function
printMe();

// function parameters and arguments
function myFunction(a, b) {
  const sum = a + b;
  console.log(sum);
}
myFunction(10, 5);

// function return keyword

function sum(a, b) {
  const result = a + b;
  return result;
}
const result = sum(5, 12);
console.log(result);

function double(x) {
  const multipy = 2 * x;
  return multipy;
}
const output = double(result);
console.log(output);
