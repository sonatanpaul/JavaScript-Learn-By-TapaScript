// This Keyword

// This in Global
// **this in global refer to browser window and nodejs refer to global
// console.log(this); // window

// This in Object - Implicit Binding

// Implicit Binding is way in which you understand
// that if a method this called on object using
// the dot notation the context of this
//  bound or asociate to the object on which
//  we have invoke the method . example :

/*
const employee = {
  id: "A542J2",
  name: "Sonatan",
  department: "Sales",
  returnThis: function () {
    return this;
  },
  getFullName() {
    return `${this.name} and department is ${this.department}`;
  },
};

console.log(employee.id); // A542J2
console.log(employee.returnThis()); // return object
console.log(employee.getFullName()); // Sonatan and department is Sales

const person = {
  name: "sonatanpaul",
  age: 26,
  address: {
    village: "Gobindopur",
    Post: "Sagarkandi",
    getName: function () {
      return this.name;
    },
  },
};

console.log(person.address.getName()); // undefined
*/

/*
const person = {
  names: "sonatanpaul",
  age: 26,
  address: {
    village: "Gobindopur",
    Post: "Sagarkandi",
    amar: {
      tumi: "ami",
      getName: () => {
        return this;
      },
    },
  },
};

console.log(person.address.amar.getName()); // undefined
*/

/*
const tom = {
  name: "Tom",
  age: 3,
};

const jerry = {
  name: "jerry",
  age: 3,
};

function greetMe(obj) {
  obj.logMessage = function () {
    console.log(`${this.name} is ${this.age} years old`);
  };
}

greetMe(tom);
tom.logMessage(); // refer tom object

greetMe(jerry);
jerry.logMessage(); // refer jerry object

// This in Normal Function

function sayName() {
  console.log(this);
}

sayName(); //  refer window

function outer() {
  console.log("outer", this);
  return function inner() {
    console.log("inner", this);
  };
}
const returnFunc = outer(); // refer window
returnFunc(); // refer window
*/

// Inside Arrow function with This Keyword

// const getFood = () => this;
// console.log(getFood()); // refer window

// const person = {
//   name: "Paul",
//   age: 26,
//   sayName: function () {
//     console.log(this.name);
//   },
// };

// console.log(person.sayName()); // refer same as object

// Arrow
// const person = {
//   name: "Paul",
//   age: 26,
//   sayName: () => {
//     console.log(this);
//   },
// };

// console.log(person.sayName()); // refer person perent scope thats why return window

/*
const person = {
  name: "Paul",
  age: 26,
  sayName: function () {
    return () => {
      console.log(this);
    };
  },
};

console.log(person.sayName()()); // refer person perent scope
*/

// Explicit Binding : Call () , Apply() , Bind ( ) :

// Call :

/*
function greeting() {
  console.log(`user name is  ${this.name}`);
}

const user = {
  name: "Sonatan",
  city: "Dhaka",
};

greeting.call(user); // refer user object

// with argument in call method

const likes = function (hoby1, hoby2) {
  console.log(this.name, "person like", hoby1, hoby2);
  console.log(this.name);
};

const person = {
  name: "Sonatan",
};

likes.call(person, "Learning", "Teching");

*/
// Apply () Method :

const likes = function (hoby1, hoby2) {
  console.log(this.name, "person like", hoby1, hoby2);
  console.log(this.name);
};

const person = {
  name: "Sonatan",
};

const hobiesToApply = ["Learning", "Teching"];
// apply method passing argument like array 
likes.apply(person, hobiesToApply);

