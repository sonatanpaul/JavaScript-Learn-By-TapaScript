// Error :

// console.log(a); // Uncaught ReferenceError: a is not defined

// console.log(x  // Uncaught SyntaxError: missing ) after argument list

const obj = null;
// console.log(obj.name); // app.js:8 Uncaught TypeError: Cannot read properties of null

// console.log(new Array(-1)); // app.js:10 Uncaught RangeError: Invalid array length

// try and catch :

try {
  // logic code here
} catch (err) {
  // if logic code not working then execute catech blok
}
// ==========================

/*
try {
  console.log("execution code here");
  abc;
  console.log("execution code end here");
} catch (err) {
  console.log("an Error occuard "); // an Error occuard
  console.log(err); //ReferenceError: abc is not defined
  console.log(err.name); // ReferenceError
  console.log(err.message); // abc is not defined
  console.log(err.stack); //   at app.js:23:3
  console.error("an Error occuard "); // an Error occuard
}
*/
// Real World Casses :

// throw :
function dividedNumbers(a, b) {
  try {
    console.log(a, b);
    if (b === 0) {
      //   let err = new Error("Divison by zero is not allowd");
      //   throw err;
      throw new Error("Divison by zero is not allowd");
    }
    const dividedby = a / b;
    console.log(dividedby);
  } catch (error) {
    console.log("Got Math Error:", error);
  }
}

dividedNumbers(20, 0);

// another example :

/*
const person = {
  name: "Paul",
  address: {
    city: "Dhaka",
  },
};

function getPostalCode(user) {
  //   console.log(user); get person object
  try {
    console.log(person.address.country.postalCode);
  } catch (error) {
    console.error("Error Accessing property :", error.message);
  }
} //  Error Accessing property : Cannot read properties of undefined (reading 'postalCode')

getPostalCode(person);
*/

// another example :

function validateAge(age) {
  //   console.log(age); // 20
  try {
    if (isNaN(age)) {
      throw new Error(
        `Invalid Number, please input a number, Your input is ${age}`
      );
    }
    console.log(`Your user age is ${age}`); // 20
  } catch (error) {
    console.error("Validation Error", error.message);
  }
}

validateAge(20);
validateAge("Tapas");
validateAge("amar");
