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
    getName: () => {
      return this.age;
    },
  },
};

console.log(person.address.getName()); // undefined
*/

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
