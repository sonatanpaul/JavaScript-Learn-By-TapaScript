/*
const numberArray = [1, 2, 3, 4];
console.log(numberArray); // [1, 2, 3, 4]

const stringArray = ["Paul", "Anik", "Asraful"];
console.log(stringArray); // ['Paul', 'Anik', 'Asraful']

const mixedArray = [10, true, "Sonatan"];
console.log(mixedArray); // [10, true, 'Sonatan']
*/

// index = The position of an element in the array is known as its index.
// index starts with 0
// index end with length - 1

// How To Create Array :

// literals Way
// const friends = ["Pual", "Anik", "Asraful"];
// console.log(friends); // ['Pual', 'Anik', 'Asraful']

// Constructor Way Array :
// const newFriends = ["Pual", "Anik", "Asraful"];
// console.log(newFriends); // "Pual", "Anik", "Asraful"

// Note : this two array element are same but memory referense are deferent .

// console.log(friends === newFriends); // false

// Note : When we create array new Array Constructor function and given one element this array retrun number of element
// example :

// const newArray = new Array(5);
// console.log(newArray); // [empty × 5]

// How to access Elements from an Array :

// ====================================================

// syntex
// const element = array[index]

/*
const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

const element1 = salad[1];
console.log(element1); // 🍄

const element2 = salad[3];
console.log(element2); // 🥒

const element3 = salad[5];
console.log(element3); // 🥕
*/

/*
// For lop with Array :
const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

for (let i = 0; i <= salad.length - 1; i++) {
  console.log(`Element at index ${i} is ${salad[i]}`);
}
*/

/*
// Adding Element to Array :
// push() -  Add Element in array last element
const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
console.log(salad); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

const pushEle = salad.push("🥜"); //  return total element of index
console.log(pushEle); // 8
console.log(salad); //  ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑', '🥜']

// unshift() add element in array first element
const unshiftEle = salad.unshift("🥜");
console.log(unshiftEle); // 9
console.log(salad);
*/

/*
// Remove Element to Array : pop() and shift()
const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
// pop() method remove last element of Array :
// Note : pop() method return remove element
const pop = salad.pop();
console.log(pop); //  🥑
console.log(salad);
["🍅", "🍄", "🥦", "🥒", "🌽", "🥕"];

// shift () method remove first element of array :
// Note: shift () return remove element

const shift = salad.shift();
console.log(shift); // 🍅
console.log(salad); // ['🍄', '🥦', '🥒', '🌽', '🥕']
*/

/*
// Array Copy or Clone : Slice ()
const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
const saladCopy = salad.slice();

console.log("Salad Before copy", salad); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']
console.log("Salad after copy", saladCopy); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']
console.log(salad === saladCopy); // false

// Note : when we copy slice method create new array with new reference 

*/

/*
// Check Array (True or Not) :
console.log(Array.isArray("🍅")); // false
console.log(Array.isArray([])); // true
console.log(Array.isArray({ tomato: "🍅" })); // false
const arr = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr)); // true
*/

// Array Destructuring :

// const [tomato, mushrom, carrot] = ["🍅", "🍄", "🥕"];
// console.log(tomato);
// console.log(mushrom);
// console.log(carrot);

/*
const salad = ["🍅", "🍄", "🥕"];
const [tomato, mushrom, carrot] = salad;
console.log(tomato);
console.log(carrot);
console.log(mushrom);
*/

// assign a default value :
// Note : when value is undefined and skip value and null value then work only default value

// const salad = ["🍅", "🥕"];
// const [tomato, carrot, mushrom = "🍄"] = salad;
// console.log(tomato, mushrom, carrot);

// const [tomato = "🍅", mushroom, carrot] = [, "🍄", "🥕"];
// console.log(tomato);
// console.log(mushroom);
// console.log(carrot);

// const [num2, num3, num1 = "sonatan"] = ["anik", "rayhan"];
// console.log(num1);
// console.log(num2);
// console.log(num3);

// const [mushroom, tomato = "🍅", carrot] = ["🍄", , "🥕"];
// console.log(tomato);
// console.log(mushroom);
// console.log(carrot);

// Skip Value :

// const salad = ["🍅", "🍄", "🥕"];

// const [, , carrot] = salad;
// console.log(carrot);
// const [tomato, ,] = salad;
// console.log(tomato);
// const [, mushroom, ,] = salad;
// console.log(mushroom);

// Nested Array :
// const numbers = [1, 2, 3, [4, 5, 6]];
// console.log(numbers[2]); // 3
// console.log(numbers[3]); // [4, 5, 6]

// Nested Array Destructuring :
// const numbers = [1, 2, 3, [4, 5, 6]];
// console.log(numbers[1]); // 2
// console.log(numbers[3][1]); // 5

// const [num1, num2, num3, [num4, num5, num6]] = numbers;
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);
// console.log(num6);

// const [, , num3, [, , num6]] = numbers;
// console.log(num3);
// console.log(num6);

// Rest Parameter :

/*
const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
const [tomato, mushroom, ...rest] = salad;
console.log(tomato); // 🍅
console.log(mushroom); // 🍄
console.log(rest); // ['🥦', '🥒', '🌽', '🥕', '🥑']
*/

/*
const [tomato, mushroom, ...others] = ["🍅", "🍄", "🥦", "🥒", "🌽"];
console.log(tomato); // 🍅
console.log(mushroom); // 🍄
console.log(others); // ['🥦', '🥒', '🌽']
*/

// Spread Parameter :
/*
const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
const saladCopy = [...salad];
console.log(salad);
console.log(saladCopy);

console.log(salad === saladCopy); //  false
// Note :  when new need new copy or clone array then we use spread opreator 
*/

// Swapping Variable :
/*
let sad = "😔";
let happy = "🙂";

[sad, happy] = [happy, sad];
console.log(sad); // 🙂
console.log(happy); // 😔
*/

// Merge
// const emotions = ["🙂", "😔"];
// const veggies = ["🥦", "🥒", "🌽", "🥕"];

// const vegEmotion = [...emotions, ...veggies];
// console.log(vegEmotion);

// const vegEmotion = emotions.concat(veggies);
// console.log(vegEmotion);

// when we need two or more array merge we use concat method or spread operator

// Length Property :

// const arr1 = ["🥦", "🥒", "🌽", "🥕"];
// const arr2 = new Array(7);
// console.log(arr1.length); // 4
// console.log(arr2.length); // 7
// note :  we know when we decalare constractor function and passing 1 element of number that's array return empty number of element

// also we change array length
// arr1.length = 20;
// console.log(arr1.length); // 20

// concat() Method :

// const first = [1, 2, 3, 4];
// const second = [5, 6, 7, 8];
// const merged = first.concat(second);
// const merged = first.concat(second, 9, 10);
// console.log(merged); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// join() Method :
// const emotions = ["🙂", "😍", "🙄", "😟"];
// const joined = emotions.join(); // 🙂,😍,🙄,😟
// const joined = emotions.join(" "); // 🙂 😍 🙄 😟
// const joined = emotions.join("_"); // 🙂_😍_🙄_😟
// console.log(joined);

// when we use empty array with join method always return empty stirng
// console.log([].join("--")); //  empty

// fill() Method :

// const color = ["blue", "pink", "white", "black"];
// const modified = color.fill("tomato");
// console.log(modified);
// console.log(color);
// Note : fill () method modified orginal array that's why fill () mutable method
// color.fill("orange", 1, 4);
// console.log(color);
// color.fill("tomato", -3, -1);
// console.log(color);

// includes () Method :
/*
const names = ["tom", "bob", "anik"];
console.log(names.includes("tom")); // true
console.log(names.includes("Tom")); //  false
console.log(names.includes("asraful")); // false
*/

// indexOf () Method :

/*
const names = ["tom", "bob", "anik"];
console.log(names.indexOf("tom")); // 0
console.log(names.indexOf("anik")); // 2
console.log(names.indexOf("rayhan")); // -1
console.log(names.indexOf("paul")); // -1
*/

// lastIndexOf () Method :
// const names = ["tom", "bob", "anik", "tom", "anik"];
// console.log(names.lastIndexOf("tom")); // 3
// console.log(names.indexOf("tom")); // 0
// console.log(names.indexOf("anik")); // 2
// console.log(names.lastIndexOf("anik")); // 4

// reverse() Method :
/*
const names = ["tom", "bob", "anik", "tom", "anik"];
const reverseName = names.reverse();
console.log(reverseName); // ['anik', 'tom', 'anik', 'bob', 'tom']
console.log(names); //['anik', 'tom', 'anik', 'bob', 'tom']
*/
//  Note : revarse method is muteable method reasson reverse method modified orginal array

// sort() Method :
// The default sort() method converts the element types into strings
//  The default sorting order is ascending.

// const names = ["tom", "bob", "anik", "tom", "anik"];
// console.log("After default sorting ", names.sort());
// console.log("After default sorting", names.sort().reverse());

const artists = [
  "John White Abbott",
  "Leonardo da Vinci",
  "Charles Aubry",
  "Anna Atkins",
  "Barent Avercamp",
];

// ascending
// console.log("Default sorting of artists array", artists.sort());
// descending

/*
const descendingSorting = artists.sort(function (a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
});
console.log(descendingSorting);
*/

/*
const descendingSorting = artists.sort(function (a, b) {
  return a === b ? 0 : a < b ? 1 : -1;
});
console.log(descendingSorting);
*/

// const numbers = [1, 2, 5, 4, 11, 4, 1, 2, 7, 3, 61];
// console.log(numbers.sort((a, b) => a - b)); // [1, 1, 2, 2, 3, 4, 4, 5, 7, 11, 61]
// console.log(numbers.sort((a, b) => b - a)); // [61, 11, 7, 5, 4, 4, 3, 2, 2, 1, 1]
// console.log(numbers.sort((a, b) => (a === b ? 0 : a > b ? 1 : -1)));
// console.log(numbers.sort((a, b) => (a === b ? 0 : a < b ? 1 : -1)));

// splice () Method :

// splice (start, deleteCount, item, item1, item2)
/*
const names = ["tom", "jerry", "bob", "jhon"];
console.log(names); // ['tom', 'jerry', 'bob', 'jhon']

console.log(names.splice(1, 2)); //  ['jerry', 'bob']
console.log(names); // ['tom', 'jhon']

console.log(names.splice(2, 0, "paul", "anik")); // return []
console.log(names); // ['tom', 'jerry', 'paul', 'anik', 'bob', 'jhon']

console.log(names.splice(1, 3, "akash")); // ['jerry', 'paul', 'anik']
console.log(names); // ['tom', 'akash', 'bob', 'jhon']
*/

// at () Method :
// find index element
// also we use negetive and postive index
/*
const names = ["tom", "jerry", "bob", "jhon"];

console.log(names.at(0)); // tom
console.log(names.at(2)); //  bob
console.log(names.at(3)); //  jhon
console.log(names.at(5)); //  undifined
console.log(names.at(-1)); //  jhon
console.log(names.at(-3)); //  jerry
console.log(names.at(-4)); // tom
*/

// copyWithin () Method :
// copyWithin (target , start, end)

/*
const array = [1, 2, 3, 4, 5, 6, 7, 8];
array.copyWithin(0, 4);
console.log(array); // [5, 6, 7, 8, 5, 6, 7, 8]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.copyWithin(1, 3, 5);
console.log(numbers); // [1, 4, 5, 4, 5, 6, 7, 8]
*/

// flat ()  Method :

/*
const numbers = [0, 1, 2, 3, [4, 5]];
console.log(numbers); // [0, 1, 2, 3, Array(2)]
console.log(numbers.flat()); // [0, 1, 2, 3, 4, 5]
*/

/*
const numbers = [0, 1, [2, 3, [4, 5]]];
console.log(numbers); // [0, 1, Array(3)]
console.log(numbers.flat()); // [0, 1, 2, 3, Array(2)]
*/

/*
const numbers = [0, 1, [2, 3, [4, 5]]];
console.log(numbers); // [0, 1, Array(3)]
console.log(numbers.flat(2)); //  [0, 1, 2, 3, 4, 5]
*/

/*
const numbers = [0, 1, [2, [3, [4, 5]]]];
console.log(numbers); // [0, 1, Array(2)]
console.log(numbers.flat(Infinity)); // [0, 1, 2, 3, 4, 5]
*/

// grouping :
{
  const employees = [
    { name: "Bob", dept: "Engineering", salary: 5000 },
    { name: "Alex", dept: "HR", salary: 3000 },
    { name: "Ravi", dept: "Engineering", salary: 7000 },
    { name: "John", dept: "Engineering", salary: 1000 },
    { name: "Tom", dept: "Sales", salary: 6000 },
  ];
  const groupByData = Object.groupBy(employees, ({ dept }) => dept);
  console.log(groupByData);

  const groupBySalary = Object.groupBy(employees, ({ salary }) => {
    return salary >= 5000 ? "More Then 5000" : "Less Then 5000";
  });
  console.log(groupBySalary);
}

// Immutability Method :
// toReversed() Method :

{
  const names = ["jhon", "bob", "paul", "tom"];
  const reverseItem = names.toReversed();
  console.log(reverseItem); //  ['tom', 'paul', 'bob', 'jhon']
  console.log(names); // ['jhon', 'bob', 'paul', 'tom']
}

{
  // ToSorted () Method :
  const names = ["jhon", "bob", "paul", "tom"];
  const sortedItem = names.toSorted();
  console.log(sortedItem); // ['bob', 'jhon', 'paul', 'tom']
  console.log(names); // ['jhon', 'bob', 'paul', 'tom']
}

{
  // ToSpliced () Method :
  const names = ["jhon", "bob", "paul", "tom"];
  const namesSplice = names.toSpliced(1, 0, "kumar");
  console.log("Orginal Array", names); //['jhon', 'bob', 'paul', 'tom']
  console.log("Spliced Array", namesSplice); //['jhon', 'kumar', 'bob', 'paul', 'tom']
  const namesSpliced = names.toSpliced(1, 2, "anik", "raha");
  console.log(namesSpliced); // ['jhon', 'anik', 'raha', 'tom']
}

{
  // with () Method :
  // with(index, value) :
  const numbers = [1, 2, 3, 4, 5, 6];
  const newNumbers = numbers.with(2, 6);
  console.log(numbers); // [1, 2, 3, 4, 5, 6]
  console.log(newNumbers); // [1, 2, 6, 4, 5, 6]
  const anotherNumbers = numbers.with(-2, 10);
  console.log(numbers); // [1, 2, 3, 4, 5, 6]
  console.log(anotherNumbers); // [1, 2, 3, 4, 10, 6]
}

// Array Like
{
  // {key: "value"} // object
  // [1,2,3] // array

  const arr_like = { 0: "I", 1: "am", 2: "array-like", length: 3 };

  console.log(arr_like);

  arr_like[2]; // 'array-like'
  arr_like.length; // 3

  console.log("is arr_like is an array?", Array.isArray(arr_like)); // false

  console.log("is arr_like is an object?", arr_like instanceof Object); // true

  function checkArgs() {
    console.log("Array Like Args", arguments);
    const argArr = [...arguments];
    console.log("Converetd Arary Args", argArr);
    argArr.forEach((elem) => {
      console.log(elem);
    });
  }

  checkArgs(1, 45);

  console.log(
    "HTML COllection as Array Like",
    document.getElementsByTagName("li")
  );
  const collectionArr = Array.from(document.getElementsByTagName("li"));
  console.log("Converted Array", collectionArr);
}
// fromAsync()
// {
//   const collectionPromise = Array.fromAsync(
//     document.getElementsByTagName("li")
//   );
//   console.log("Converted Array", collectionPromise);

//   collectionPromise.then((value) => console.log(value));

//   const ret = Array.fromAsync({
//     0: Promise.resolve("tapaScript"),
//     1: Promise.resolve("Google"),
//     2: Promise.resolve("Apple"),
//     length: 3,
//   }).then((value) => console.log(value));

//   console.log(ret);
// }

// of()
{
  const a = new Array(2, 3, 4); // [2,3,4]
  const b = [4, 5, 6]; // [4,5,6]

  const c = Array.of(2, true, "test", { name: "Alex" }, [1, 2, 3]);
  console.log("c", c);
}

{
  // filter ()  Method :
  let customers = [
    {
      id: 1,
      f_name: "Abby",
      l_name: "Thomas",
      gender: "M",
      married: true,
      age: 32,
      expense: 500,
      purchased: ["Shampoo", "Toys", "Book"],
    },
    {
      id: 2,
      f_name: "Jerry",
      l_name: "Tom",
      gender: "M",
      married: true,
      age: 64,
      expense: 100,
      purchased: ["Stick", "Blade"],
    },
    {
      id: 3,
      f_name: "Dianna",
      l_name: "Cherry",
      gender: "F",
      married: true,
      age: 22,
      expense: 1500,
      purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
    },
    {
      id: 4,
      f_name: "Dev",
      l_name: "Currian",
      gender: "M",
      married: true,
      age: 82,
      expense: 90,
      purchased: ["Book"],
    },
    {
      id: 5,
      f_name: "Maria",
      l_name: "Gomes",
      gender: "F",
      married: false,
      age: 7,
      expense: 300,
      purchased: ["Toys"],
    },
  ];

  // syntax
  /*
  const newArray = Array.filter((currentValue, index, array) =>{
      // Do somthing here ......
  })
  */

  const newArray = customers.filter((customer) => {
    return customer.age >= 60;
  });
  console.log(newArray); //  (2) [{…}, {…}]
}

{
  // map ()  Method :
  let customers = [
    {
      id: 1,
      f_name: "Abby",
      l_name: "Thomas",
      gender: "M",
      married: true,
      age: 32,
      expense: 500,
      purchased: ["Shampoo", "Toys", "Book"],
    },
    {
      id: 2,
      f_name: "Jerry",
      l_name: "Tom",
      gender: "M",
      married: true,
      age: 64,
      expense: 100,
      purchased: ["Stick", "Blade"],
    },
    {
      id: 3,
      f_name: "Dianna",
      l_name: "Cherry",
      gender: "F",
      married: true,
      age: 22,
      expense: 1500,
      purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
    },
    {
      id: 4,
      f_name: "Dev",
      l_name: "Currian",
      gender: "M",
      married: true,
      age: 82,
      expense: 90,
      purchased: ["Book"],
    },
    {
      id: 5,
      f_name: "Maria",
      l_name: "Gomes",
      gender: "F",
      married: false,
      age: 7,
      expense: 300,
      purchased: ["Toys"],
    },
  ];

  // syntax
  /*
  const newArray = Array.map((Element, index, array) =>{
      // Do somthing here ......
  })
  */

  const customersWithFullName = customers.map((customer) => {
    let title = "";
    if (customer.gender === "M") {
      title = "Mr";
    } else if (customer.gender === "F" && customer.married) {
      title = "Mrs";
    } else {
      title = "Miss";
    }
    customer["full_name"] = `${title} ${customer.f_name} ${customer.l_name} `;
    return customer;
  });
  console.log(customersWithFullName);
}

{
  // Reduce ()  Method :
  let customers = [
    {
      id: 1,
      f_name: "Abby",
      l_name: "Thomas",
      gender: "M",
      married: true,
      age: 32,
      expense: 500,
      purchased: ["Shampoo", "Toys", "Book"],
    },
    {
      id: 2,
      f_name: "Jerry",
      l_name: "Tom",
      gender: "M",
      married: true,
      age: 64,
      expense: 100,
      purchased: ["Stick", "Blade"],
    },
    {
      id: 3,
      f_name: "Dianna",
      l_name: "Cherry",
      gender: "F",
      married: true,
      age: 22,
      expense: 1500,
      purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
    },
    {
      id: 4,
      f_name: "Dev",
      l_name: "Currian",
      gender: "M",
      married: true,
      age: 82,
      expense: 90,
      purchased: ["Book"],
    },
    {
      id: 5,
      f_name: "Maria",
      l_name: "Gomes",
      gender: "F",
      married: false,
      age: 7,
      expense: 300,
      purchased: ["Toys"],
    },
  ];

  // syntax
  /* arr.reduce(
     reducer(
       accumulator,
       currentValue,
       index,
       array),
    initialValue);
  // A reducer function which is also called as callback function to be called on each element of the array.

    const ret = function reducer(accumulator, currentValue, index, array) {
        // do something with accumulator and currentvalue
        // You get a result
        // You return that result
    }
*/

  const numbers = [1, 2, 3, 4, 5];
  const sumResult = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(sumResult);

  // ===============================
  let count = 0;
  const result = customers.reduce((accumulator, customer) => {
    if (customer.purchased.includes("Book")) {
      accumulator = accumulator + customer.age;
      count++;
    }
    return accumulator;
  }, 0);
  console.log("Customer avarage Purcased", Math.floor(result / count)); // 45
}

// reduceRight () Method :
// reduce

const numbers = [100, 45, 15];
const subsNumbers = numbers.reduce((accumulator, currentValue) => {
  return accumulator - currentValue;
});
console.log(subsNumbers);

// const numbers = [100, 45, 15];
// const subsNumbers = numbers.reduceRight((accumulator, currentValue) => {
//   return accumulator - currentValue;
// });
// console.log(subsNumbers);

{
  // some () Method :

  let customers = [
    {
      id: 1,
      f_name: "Abby",
      l_name: "Thomas",
      gender: "M",
      married: true,
      age: 32,
      expense: 500,
      purchased: ["Shampoo", "Toys", "Book"],
    },
    {
      id: 2,
      f_name: "Jerry",
      l_name: "Tom",
      gender: "M",
      married: true,
      age: 64,
      expense: 100,
      purchased: ["Stick", "Blade"],
    },
    {
      id: 3,
      f_name: "Dianna",
      l_name: "Cherry",
      gender: "F",
      married: true,
      age: 22,
      expense: 1500,
      purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
    },
    {
      id: 4,
      f_name: "Dev",
      l_name: "Currian",
      gender: "M",
      married: true,
      age: 82,
      expense: 90,
      purchased: ["Book"],
    },
    {
      id: 5,
      f_name: "Maria",
      l_name: "Gomes",
      gender: "F",
      married: false,
      age: 7,
      expense: 300,
      purchased: ["Toys"],
    },
  ];

  // some() - Do we have a Young Customer(age less than 10 years)

  // Syntax :

  /*
Array.some((element, index, array) =>{
  // code here ....
})
*/

  const youngCustomer = customers.some((customer) => {
    return customer.age > 10;
  });
  console.log("Has Young customer(Age < 10):", youngCustomer);
}
{
  // every () Method :
  let customers = [
    {
      id: 1,
      f_name: "Abby",
      l_name: "Thomas",
      gender: "M",
      married: true,
      age: 32,
      expense: 500,
      purchased: ["Shampoo", "Toys", "Book"],
    },
    {
      id: 2,
      f_name: "Jerry",
      l_name: "Tom",
      gender: "M",
      married: true,
      age: 64,
      expense: 100,
      purchased: ["Stick", "Blade"],
    },
    {
      id: 3,
      f_name: "Dianna",
      l_name: "Cherry",
      gender: "F",
      married: true,
      age: 22,
      expense: 1500,
      purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
    },
    {
      id: 4,
      f_name: "Dev",
      l_name: "Currian",
      gender: "M",
      married: true,
      age: 82,
      expense: 90,
      purchased: ["Book"],
    },
    {
      id: 5,
      f_name: "Maria",
      l_name: "Gomes",
      gender: "F",
      married: false,
      age: 7,
      expense: 300,
      purchased: ["Toys"],
    },
  ];

  // every() - Every Customer is Married?
  // syntax :
  /*
    Array.every((currentElement, currentIndex, array) =>{
      // code  here ...
    })
*/
  const allCustomerMarried = customers.every((customer) => {
    return customer.married;
  });
  console.log("All Customer Married", allCustomerMarried); // false
}

{
  // find () Method :
  let customers = [
    {
      id: 1,
      f_name: "Abby",
      l_name: "Thomas",
      gender: "M",
      married: true,
      age: 32,
      expense: 500,
      purchased: ["Shampoo", "Toys", "Book"],
    },
    {
      id: 2,
      f_name: "Jerry",
      l_name: "Tom",
      gender: "M",
      married: true,
      age: 64,
      expense: 100,
      purchased: ["Stick", "Blade"],
    },
    {
      id: 3,
      f_name: "Dianna",
      l_name: "Cherry",
      gender: "F",
      married: true,
      age: 22,
      expense: 1500,
      purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
    },
    {
      id: 4,
      f_name: "Dev",
      l_name: "Currian",
      gender: "M",
      married: true,
      age: 82,
      expense: 90,
      purchased: ["Book"],
    },
    {
      id: 5,
      f_name: "Maria",
      l_name: "Gomes",
      gender: "F",
      married: false,
      age: 7,
      expense: 300,
      purchased: ["Toys"],
    },
  ];
  const foundYoungCustomer = customers.find((customer) => {
    return customer.age < 10;
  });

  console.log(foundYoungCustomer);
}
