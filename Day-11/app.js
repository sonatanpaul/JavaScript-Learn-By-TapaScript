// Object Learn
/*
// literal Object
const person = {
  name: "Sonatan",
  age: 26,
};

// access object property
console.log(person.name); // Sonatan
console.log(person.age); // 26

// How to add object property
person.isSeniorCitizen = false;
console.log(person); // total 3 property now

// how to access special object property
// using bracket notation
const user = {
  name: "Paul",
  age: 26,
  "Ex-Gf": "Bristi Das",
};
console.log(user["Ex-Gf"]);

// how to add modifiy object property
user.age = 27;
console.log(user);
user["Ex-Gf"] = "momo";
console.log(user["Ex-Gf"]);

// how to delete property
delete user["Ex-Gf"];
console.log(user);
delete user.age;
console.log(user);
*/

// dynamic variable value access
let user = {
  name: "paul",
  age: 26,
};

let keyValue = "name";
console.log(user.keyValue); // undifined
console.log(user[keyValue]); // paul

// dynamic variable and value ?
// const car = prompt("hello");
// const favCars = {
//   [car]: 5,
// };
// console.log(favCars);

// Constructor function to create Object

/*
function Car(name, model) {
  this.name = name;
  this.model = model;
}

const BMW = new Car("BMW", 2025);
console.log(BMW);
// BMW.color = "Black";
// console.log(BMW);
Car.prototype.color = "Black";
console.log(BMW);
console.log(BMW.color);
const Audi = new Car("Audi", 2025);
console.log(Audi.color);
console.log(Audi.name);

*/

// new Object
const person = new Object();
person.name = "Sonatan Paul";
person.age = 26;
console.log(person);
