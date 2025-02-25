// for loop
// for loop structure
// for (initialization; condition; update) {
//   //code
// }

// ==========================================

// Option - 1
// looping 1 to 5
// for (let count = 1; count <= 5; count++) {
//   console.log(count);
// }

// Option - 2
// looping 1 to 100;
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// Option - 3
// findout all even number with for loop
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log("even number is", i);
//   }
// }

// Option - 4
// findout all odd number with for loop
// for (i = 1; i <= 100; i++) {
//   if (i % 2 === 1) {
//     console.log("odd number is", i);
//   }
// }

// Option - 5
// findout all even number and sum all even number
let sum = 0;
for (let num = 1; num <= 100; num++) {
  if (num % 2 === 0) {
    // sum = sum + num;
    sum += num;
  }
}

console.log(sum);

// Option - 6
// findout all odd number and sum all odd number

let sum1 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    sum1 = sum1 + i;
  }
}
console.log(sum1);

// Option - 7
// 1 to 100 all number sum
let sum2 = 0;
for (let i = 1; i <= 100; i++) {
  sum2 = sum2 + i;
}

console.log(sum2);

// Nested Loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("Row", i, "Col", j);
  }
}

// break and continue
// Option - 1
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// Option - 2
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

// Continue :
// Option - 1;
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i); // 1,2,4,5
}

// Option - 2
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // 1,2,4,5
}

// Multiple counter for single loop

for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
  console.log(i, j);
}

// while loop :
// while loop structure

// while(condition){
//code
// }

// Option 1
let num = 1;

while (num <= 5) {
  console.log(num);
  num++;
  console.log(num);
}
