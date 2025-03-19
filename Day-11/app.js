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
// let user = {
//   name: "paul",
//   age: 26,
// };

// let keyValue = "name";
// console.log(user.keyValue); // undifined
// console.log(user[keyValue]); // paul

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

/*
// new Object
const person = new Object();
person.name = "Sonatan Paul";
person.age = 26;
console.log(person);

// create object with factory function

function createUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

const user1 = createUser("paul", 26);
console.log(user1);
const user2 = createUser("kumar", 26);
console.log(user2);

// with shorthand

function myName(name, age) {
  return { name, age };
}

const name = myName("Sonatan", 26);
console.log(name);
*/

// Object Method
// with factory function

/*
function createUser(name, age) {
  return {
    name,
    age,
    greeting() {
      console.log(`my name is ${name} and age ${age} `);
    },
    user: function () {
      console.log(`You name is ${this.name} and age ${this.age}`);
    },
  };
}

const user = createUser("Sonatan", 26);
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.greeting());
console.log(user.user());

// literals way
const profile = {
  fname: "Sonatan",
  lname: "Paul",
  age: 26,
  fullName() {
    console.log(`my name is ${this.fname} ${this.lname}`);
  },
  youName: function () {
    console.log(`you name is ${this.fname}`);
  },
};

console.log(profile.fullName());
*/

// Nested Object
/*
const profile = {
  name: "Paul",
  age: 26,
  university: "SMUCT",
  message: function () {
    console.log(`my university name is ${this.university}`);
  },
  address: {
    city: "Dhaka",
    pin: 1212,
    greeting() {
      console.log(`my city name is ${this.city}`);
    },
  },
};

console.log(profile.name); // Paul
console.log(profile.message()); // my university name is SMUCT
console.log(profile.address.pin); // 1212
console.log(profile.address.greeting()); // my city name is Dhaka
*/

// (in) method
// cheack object property (name) true or false : in method

/*
const person = {
  name: "Paul",
  age: 26,
};

console.log(person.salary); // undifined
console.log("salary" in person); // false
console.log(person.name); // Paul
console.log("name" in person); // true
*/

// for in loop
/*
const person = {
  name: "Sonatan",
  age: 26,
  color: "Black",
};
for (let key in person) {
  console.log(key);
  console.log(person[key]);
}
*/

// Object key and Values :
/*
const person = {
  name: "Paul",
  age: 26,
  color: "Black",
};

const key = Object.keys(person);
console.log(key);
console.log(key.length);
const values = Object.values(person);
console.log(values);
console.log(values.length);
*/

// Object Reference

/*
let person1 = {
  name: "Sonatan Paul",
  age: 26,
}; // Memory Location : FVF54

let person2 = {
  name: "Sonatan Paul",
  age: 26,
}; // memory location : AF245

console.log(person1 == person2); // false
console.log(person1 === person2); // false

person1 = person2; // change value person1 to person2
console.log(person1 == person2); // true : memory no : AF245
console.log(person1 === person2); // true :memory no : AF245
*/

// console.log("hello world");

// Object.assign():

// const target = { a: 2, b: 3 };
// const source = { p: 2, q: 4 };

/*
const returnObj = Object.assign({}, target);
console.log(returnObj === target); // false

const returnObj2 = Object.assign(target, source);
console.log(returnObj2); // {a: 2, b: 3, p: 2, q: 4}


const target = { a: 2, b: 3 };
const source = { b: 2, q: 4 };

const returnObj = Object.assign(target, source);
console.log(returnObj); // {a: 2, b: 2, q: 4}

*/

// shallowCopy with Object.assign ()

/*
const obj = {
  a: 2,
  b: { c: 3 },
};

const obj1 = Object.assign({}, obj);
obj1.b.c = 4;
console.log(obj1.b.c); //  4
console.log(obj.b.c); //  4

obj1.a = 5;
console.log(obj1.a); // 5
console.log(obj.a); // 2
*/

// copy with structuredClone in deep copy
/*
const person = {
  a: 54,
  b: { c: 50 },
};

const obj = structuredClone(person);
obj.a = 60;
console.log(obj.a); // 60;
console.log(person.a); // 54

obj.b.c = 40;
console.log(obj.b.c); // 40
console.log(person.b.c); // 50
*/

// Object entries()
// obj to array

/*
const obj = {
  a: 2,
  b: 4,
};

const myArr = Object.entries(obj);
console.log(myArr);
2; // [Array(2), Array(2)]

// Object fromEntries()
// convert array to object

const persons = new Map([
  ["foo", "rayhan"],
  [10, 20],
]);

const returnObj = Object.fromEntries(persons);
console.log(returnObj);

*/

// Object.freeze()

/*
const obj = {
  name: "paul",
  age: 26,
};

Object.freeze(obj);
obj.color = "Black"; // can't add property
console.log(obj);
obj.age = 28;
console.log(obj); // can't modified property
delete obj.name;
console.log(obj); // can't delete property

*/

// Object.seal()

/*
const obj = {
  name: "paul",
  age: 26,
};

Object.seal(obj);
obj.name = "Sonatan Paul";
console.log(obj); // allowed modified
obj.color = "Black";
console.log(obj); // can't allow add property
delete obj.age;
console.log(obj);

*/

/*
// hasWon property

const obj = {
  name: "paul",
  age: 26,
};

console.log(Object.hasOwn(obj, "name")); 
console.log(Object.hasOwn(obj, "salary"));
console.log("salary" in obj);
console.log("name" in obj);

// note : hasOwn() : check only won property
          // in  : check prototye and won property 

*/

// Object Destructuring

// const person = {
//   name: "Paul",
//   age: 26,
//   friends: ["anik, bikash", "asraful"],
//   village: "Gobindopur",
//   address: {
//     village: "Paul Para",
//     Post: "Sagarkandi",
//     pin: 6661,
//   },
// };

// console.log(person.name); // Paul
// console.log(person.address.village); // Paul Para

// const { village } = person;
// console.log(village);

// const {
//   address: { Post, pin, village },
//   age,
// } = person;

// console.log(Post);
// console.log(age);
// console.log(pin);

// const { name, married = "False" } = person;
// console.log(name);
// console.log(married);
// const { name: nam } = person;
// console.log(nam);

//  Function desturcturing

// const person = {
//   name: "Paul",
//   age: 26,
//   friends: ["anik, bikash", "asraful"],
//   village: "Gobindopur",
//   address: {
//     village: "Paul Para",
//     Post: "Sagarkandi",
//     pin: 6661,
//   },
// };

// function myName(person) {
//   const {
//     village,
//     address: { Post, pin },
//   } = person;
//   console.log(village);
//   console.log(pin);
//   console.log(Post);
//   // console.log(person);
// }

// myName(person);

// function sayName() {
//   return {
//     name: "Paul",
//     age: 26,
//     friends: ["anik, bikash", "asraful"],
//     village: "Gobindopur",
//     address: {
//       village: "Paul Para",
//       Post: "Sagarkandi",
//       pin: 6661,
//     },
//   };
// }

// const object = sayName();
// console.log(object);
// const { village, age } = object;
// console.log(age);
// console.log(village);

// // Optional Chaining

// const person = {
//   name: "Paul",
//   age: 26,
//   friends: ["anik, bikash", "asraful"],
//   village: "Gobindopur",
//   address: {
//     village: "Paul Para",
//     Post: "Sagarkandi",
//     pin: 6661,
//   },
// };

// console.log(person.name); // Paul
// console.log(person.color); // undifined
// // console.log(person.color.age); // error
// console.log(person.color?.age); // no error but undifiend
// console.log(person.address.pin);
