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

// Callback Function
// Option 1
function foo() {
  console.log("Foo");
  buz();
}

function buz() {
  console.log("Buz");
}
foo(buz);

// Option -2
function callback(hello) {
  console.log("Hello");
  hello();
}
callback(function () {
  console.log("Hello World");
});

// Option - 3
function call(callback) {
  console.log("Callback");
  callback();
}

let buz1 = function () {
  console.log("Hello Callback");
};
call(buz1);

// Pure Function
function greeting(name) {
  return "Hello " + name;
}
console.log(greeting("Sonatan")); // Hello Sonatan

// inpure Function
let greetinMSG = "Hello ";

function greetiing(name) {
  return greetinMSG + name;
}

console.log(greetiing("Sonatan")); // Hello Sonatan
greetinMSG = "Hola ";
console.log(greetiing("Sonatan Paul")); // Hola Sonatan Paul

// Higer Order Function
// 1.
function getCamera(camera) {
  camera();
}
getCamera(function () {
  console.log("Sony Camera");
});

// 2.
function returnFunc() {
  return function () {
    console.log("Hello");
  };
}

const retFun = returnFunc();
retFun();
// This two type is Higher order function .

// Arrow Function
// 1
const func = () => console.log("Hello");
func();
// 2
const func1 = () => {
  console.log("Hello1");
};
func1();
// 3
const func2 = (a, b) => {
  return a + b;
};

console.log(func2(2, 2));

// 4
const func3 = (a) => a * 4;
console.log(func3(5));

// IIFE (Immediately Invoked Function Experssion)
(function () {
  console.log("Sonatan Paul");
})();

// 2
(function (count) {
  console.log("IIFE", count * 2);
})(2);

// Recursion
// function foo() {
//   foo();
// }

function hello(count) {
  console.log(count);
  if (count === 0) {
    console.log("No more Exucuted");
    return;
  }

  hello(count - 1);
}

hello(5);
