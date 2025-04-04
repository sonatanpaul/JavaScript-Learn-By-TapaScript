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
{
  // JavaScript String charAt()
  const names = "sonatanpaul";
  console.log(names); // sonatanpaul
  console.log(names.charAt(0)); // s
  console.log(names.charAt(1)); // o
  console.log(names.charAt(2)); // n
  console.log(names.charAt(3)); // a
  console.log(names.charAt(4)); //  t
  console.log(names.charAt(5)); // a
  console.log(names.charAt(6)); // n
}
{
  // JavaScript String at()
  const text = "Hello World";
  console.log(text.at(0)); // H
  console.log(text.at(1)); // e
  console.log(text.at(2)); // l
  console.log(text.at(3)); // l
  console.log(text.at(4)); // o
  console.log(text.at(-1)); //d
  console.log(text.at(-2)); // l
  console.log(text.at(-3)); // r
  console.log(text.at(-4)); // o
  console.log(text.at(-5)); // W
}

{
  const text = "sonatanpaul";
  for (let i = text.length - 1; i >= 0; i--) {
    console.log(text.at(i), text[i], text.charAt(i), i);
  }
}

{
  // Property Access [ ]
  const text = "sonatan";
  const s = text[0];
  console.log(s); //
  const o = text[1];
  console.log(o); // o
}
