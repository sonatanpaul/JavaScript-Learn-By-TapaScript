// how to decalare string
const names = "Sonatan Paul";
console.log(names); // Sonatan Paul

{
  // You can use single or double quotes:
  const name = "Paul";
  console.log(name); // Paul
  const names = "Sonatan Paul"; // Sonatan Paul
  console.log(names);
}

// Note :
// Strings created with single or double quotes work the same.
// There is no difference between the two.

// Template Strings:
const text = `Lorem ipsum dolor sit amet 
consectetur adipisicing elit. 
Nisi repellat illo at harum voluptate
dolores porro aspernatur voluptates aut ducimus.`;
console.log(text);

{
  // String Length :
  const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(text.length); // 26

  const names = "Sonatan Pual";
  console.log(names.length); // 12
}

{
  // Escape Characters:
  let text = 'We are the so-called "Vikings" from the north.';
  console.log(text);
  let text1 = "It's alright.";
  console.log(text1); // It's alright.
}

{
  // JavaScript Strings as Objects
  const x = "Jhon";
  console.log(x); //  Jhon
  console.log(typeof x); // string
  const y = new String("Jhon");
  console.log(y); // {'Jhon'}
  console.log(typeof y); // object

}
