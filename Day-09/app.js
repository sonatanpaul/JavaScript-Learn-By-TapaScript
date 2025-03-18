/*
console.log("Name is", names);
var names;
names = "Tom";
console.log("Names is", names);
*/

/*
console.log("Name is", names);
var names;
names = "Tom";
console.log("Names is", names);
*/

/*
console.log("name is", names);
let names = "Tom";
console.log("name is", names);

*/

// Temporal Dead Zone :

// TDZ Means : an area where you can not access a variable  until it is initialized.
// Reference Error

/*
{
  // name variable TDZ started here // friend variable TDZ start here
  //
  //
  console.log(name); // reference error
  //
  console.log(friend) // reference error
  //
  //
  let name = "Sonatan Paul"; // name variable TDZ end here 
  console.log(name) // Sonatan Pual // reason TDZ end
  //
  //
  //
  let friend = 'Anik'  // friend variable TDZ end here
  console.log(friend) // Anik // reason : TDZ alrady end
  //
}

*/

/*
// Function Hoisting

// invoke a function , chase()
chase();
// Declare a function, chase()
function chase() {
  console.log("Tom chases Jerry");
  caught();
}

// Declare a function , caught
function caught() {
  console.log("Tom caught Jerry");
}

*/

// Hoisting  Function as a Expression

/*
test(); // test is variable and variable value is function thats why execution phase e variable value initiliazation value undifined thats why error

var test = function () {
  console.log("I am being tested");
};
*/

// Scope :

/*
// Global Scope : Variable declare outside of any function or block scope are in the global scope
var name = "Sonatan"; // Sonatan

function myName() {
  console.log("name is ", name); // Sonatan
}
myName();
console.log(name); // Sonatan

{
  console.log("Inside Block: my name is ", name); // Sonatan
}

// Note : var, let , const in Global scope

// var:  when we declare a variable using var in the global scope that paritcular var variable added window object or global object.
// example :
var names = "Sonatan";
console.log(names); // Sonatan
console.log(window.names); // Sonatan

// let and const :
// when we declare a variable using let and const in the global scope that particular let and const variable not added window object and global object.
// Example :
let names = "Sonatan";
console.log(names); // Sonatan
console.log(window.names); // " "
*/

// Function Scope :
// any (var, let, const) variable declared inside a function are only accessible within that function

/*
// var :
function toDo() {
  var task = "Learn 40 Days of Js ";
  console.log(task); //accessable
}
toDo();
console.log(task); // not accessable

// let :
function toDo() {
  let task = "Learn 40 Days of Js ";
  console.log(task); //accessable
}
toDo();
console.log(task); // not accessable

// let :
function toDo() {
  const task = "Learn 40 Days of Js ";
  console.log(task); //accessable
}
toDo();
console.log(task); // not accessable
*/

// Blocked Scope :
// only(let, const) variable declared using inside {} cannot be accessed outside the block
/*
// var :
{
  var count = 10;
  console.log(count); // allowed accessed
}


console.log(count); // allow accessed

// Note : var always function scope

// let :
{
  let count = 10;
  console.log(count); // allowed accessed
}

console.log(count); // not allow accessed

// let :
{
  const count = 10;
  console.log(count); // allowed accessed
}

console.log(count); // not allow accessed
*/

// Scope Chain :

/*
let globalVar = "I am a global variable";

function outer() {
  let outerVar = "I am a outer variable";
  function inner() {
    let innerVar = "I am a inner variable";

    console.log(globalVar); // I am a global variable
    console.log(outerVar); // I am a outer variable
    console.log(innerVar); // I am a inner variable
  }
  inner();
}

outer();

// console.log(globalVar); not allow
// console.log(outerVar); not allow
// console.log(innerVar); not allow
*/
