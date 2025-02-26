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
// ================================================
function double(x) {
  const multipy = 2 * x;
  return multipy;
}
const output = double(result);
console.log(output);

// default parameters
function calc(a, b) {
  return 2 * (a + b);
}
const calcResult = calc(2);
console.log(calcResult); // NaN

// Option - 2
function calc1(a, b = 0) {
  return 2 * (a + b);
}
const calcResult1 = calc1(3);
console.log(calcResult1); // 6

// Option - 3
function calc2(a = 2, b = 4) {
  return 2 * (a + b);
}
const calcResult2 = calc2();
console.log(calcResult2); // 12

// Rest Parameters
function calculateThis(x, y, ...rest) {
  console.log(x, y, rest);
}
calculateThis(1, 2, 3, 4, 5, 6, 7, 8, 9);
// ans:  1 2 [3,4,5,6,7,8,9]

// Nested Function
// Option - 1;
function outer() {
  console.log("Outer Function");
  function inner() {
    console.log("Inner Function ");
  }
  inner();
}
outer();

// Option - 2
function outer1() {
  console.log("Outer");
  return function inner() {
    console.log("Inner");
  };
}

const nestedFunc = outer1();
console.log(nestedFunc());
