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
const person = {
  name: "Paul",
  age: 26,
  color: "Black",
};

const key = Object.keys(person);
console.log(key);
const values = Object.values(person);
console.log(values);
