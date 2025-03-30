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
const friends = ["Pual", "Anik", "Asraful"];
console.log(friends); // ['Pual', 'Anik', 'Asraful']

// Constructor Way Array :
const newFriends = ["Pual", "Anik", "Asraful"];
console.log(newFriends); // "Pual", "Anik", "Asraful"

// Note : this two array element are same but memory referense are deferent .

console.log(friends === newFriends); // false

// Note : When we create array new Array Constructor function and given one element this array retrun number of element
// example :

const newArray = new Array(5);
console.log(newArray); // [empty × 5]
