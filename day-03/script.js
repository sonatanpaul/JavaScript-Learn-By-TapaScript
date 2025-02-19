// Arithmetic  Operator
let a = 10;
let b = 20;

console.log(a + b); // 30
console.log(b - a); // 10
console.log(a * b); // 200
console.log(b / a); // 2

// post increment
let count = 5;
console.log(count++); // count = count + 1; // 5
console.log(count--); // count = count - 1; // 5

// pre increment

let number = 5;
console.log(++number); // count = count + 1;  // 6
console.log(--number); // count = count - 1;  // 4

// Assignment Operator

let x = 5;
console.log(5); // 5
x = x + 2;
console.log(x); // 7
//short hand
x += 10; // x = x + 7; // 17;
x -= 2; // x = x - 2; // 15;

// Comparison Operator

4 == 4; // true
4 == 5; // false
0 == false; // true
0 === false; // false
3 == "3"; // true
3 === "3"; // false

// javascript oject can't compair value compare reference
const obj1 = { name: "Paul" };
const obj2 = { name: "Paul" };
console.log(obj1 === obj2);

// Gater than operator
4 > 3; // true
7 > 9; // false
4 >= 4; // true

// Less than operator
5 < 8; // true
3 < 2; // false
5 <= 5; // true

// Logical Operator

// Logical And Operator
console.log(true && true); // true;
console.log(true && false); // false;
console.log(false && true); // false;
console.log(false && false); // false;
console.log("Cow" && "Horse"); // Horse;
console.log([1] && [10]); // 10;

// Logical Or Operator
console.log(false || false); // false
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true
console.log("Cow" || "Horse"); // Cow

// Logical Not Operator
console.log(!true); // false
console.log(!false); // true

// Nullish Coalescing Operator
// Note : Only right side Null and undefined value they return right side value
const c = undefined ?? 1; // 1
const d = null ?? 2; // 2
const e = "Paul" ?? 4; // Paul

// Conditional Ternary Operator

let age = 50;
const result = age >= 40 ? "Senior" : "Non Senior";
console.log(result); // Senior
