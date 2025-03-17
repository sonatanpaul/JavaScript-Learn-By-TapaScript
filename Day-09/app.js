/*
console.log("Name is", names);
var names;
names = "Tom";
console.log("Names is", names);
*/

/*
console.log("Name is", names);
var names;
names = "Tom";
console.log("Names is", names);
*/

/*
console.log("name is", names);
let names = "Tom";
console.log("name is", names);

*/

// Temporal Dead Zone :

// TDZ Means : an area where you can not access a variable  until it is initialized.
// Reference Error

{
  // name variable TDZ started here // friend variable TDZ start here
  //
  //
  console.log(name); // reference error
  //
  console.log(friend) // reference error
  //
  //
  let name = "Sonatan Paul"; // name variable TDZ end here 
  console.log(name) // Sonatan Pual // reason TDZ end
  //
  //
  //
  let friend = 'Anik'  // friend variable TDZ end here
  console.log(friend) // Anik // reason : TDZ alrady end
  //
}
