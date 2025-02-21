// if else :

let catchingBus = true;

if (catchingBus) {
  console.log("I will reach home on time");
} else {
  console.log("I will be late to reach");
}

// Example More
let age = 8;

if (age >= 18) {
  console.log("You are eligible to Vote");
} else {
  console.log("You are not eligible to Vote");
}

// Ans : You are not eligible to Vote

// Multiple if else

let score = 45;

if (score >= 90) {
  console.log("Grade - A");
} else if (score >= 80) {
  console.log("Grade - B");
} else if (score >= 70) {
  console.log("Grade - C");
} else {
  console.log("Fail");
}

let num = 0;

// Option - 1
if (num >= 0) {
  console.log("Greater then 0");
} // Ans : Greater then 0

if (num === 0) {
  console.log(0);
} // Ans: 0

if (num <= 0) {
  console.log("Less then 0");
} // Ans : Less then 0

// Option - 2

if (num === 0) {
  console.log(0);
} else if (num >= 0) {
  console.log("Greater Then 0");
} else if (num <= 0) {
  console.log("Less then 0");
} // Ans Only : 0

// Nesting if Else

const outerCondition = true;
const innerCondition = false;

if (outerCondition) {
  console.log("Outer Condition if");
  if (innerCondition) {
    console.log("inner if");
  } else {
    console.log("inner else");
  }
} else {
  console.log("Outer else");
}

// Ans: Outer Condition if
// Ans : inner else

// Option - 2

const outerCondition1 = false;
const innerCondition1 = true;

if (outerCondition1) {
  console.log("Outer Condition if");
  if (innerCondition1) {
    console.log("inner if");
  } else {
    console.log("inner else");
  }
} else {
  console.log("Outer else");
}
// Ans : Outer else

// Note : if condition alone executed but else condition alone not executed
// Example : only if

let isAlone = true;
if (isAlone) {
  console.log("I am alone if");
}
// Ans : I am alone if

// =====================================

// Example : Only else
else {
  console.log("I am alone else");
}
// Ans : Uncaught SyntaxError: Unexpected token 'else'

// Switch Case :
let day = 3;

switch (day) {
  case 1:
    console.log("Friday");
    break;
  case 2:
    console.log("Saturday");
    break;
  case 3:
    console.log("Sunday");
    break;
  case 4:
    console.log("Monday");
    break;
  default:
    console.log("Number Day Invalid");
}
// Ans : Monday

// Option - 2
let name = "Java";

switch (name) {
  case "JavaScript":
    console.log("JavaScript Win");
    break;
  case "React Js":
    console.log("React Js Win");
    break;
  case "Next JS":
    console.log("Next Js Win");
    break;
  default:
    console.log("Backend Developer Win");
}

// Ans: Backend Developer Win
