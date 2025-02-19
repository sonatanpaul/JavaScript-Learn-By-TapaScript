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

// Logical operator 

