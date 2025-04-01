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
