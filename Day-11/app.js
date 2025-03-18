// Object Learn

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
