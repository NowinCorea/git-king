"use strict";

// Array ✨

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position

const kings = ["clover", "spade", "heart"];
console.log(kings);
console.log(kings.length);
console.log(kings[1]);

console.log(kings[kings.length - 1]);
console.clear();
// 3. Looping over an array
// print all kings

// a.for
for (let i = 0; i < kings.length; i++) {
  console.log(kings[i]);
}

// b. for of
for (let king of kings) {
  console.log(king);
}

// c. forEach >api
kings.forEach((kings, index) => console.log(kings, index));

// 4. Addtion, deletion, copy
// push: add an item to the end
kings.push("dia", "ga");
console.log(kings);

// pop: remove an item from the end
kings.pop();
console.log(kings);

// unshift : add an item to the bigining
kings.unshift("king is me!");
console.log(kings);

// shift : remove an item to the bigining
kings.shift();
console.log(kings);
console.clear();
// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
console.log(kings);
kings.splice(0, 1);
console.log(kings);
kings.splice(1, 1, "reking", "is mee");
console.log(kings);

// combine two arrays
const kings2 = ["look", "knight"];
//concat api
const newkings = kings.concat(kings2);
console.log(newkings);

// 5. Searching
// find the index
console.clear();
console.log(kings);
console.log(kings.indexOf("reking"));

// includes
console.log(kings.includes("spade"));
console.log(kings.includes("heart"));

// lastIndexOf
console.clear();
kings.push("spade");
console.log(kings);
console.log(kings.indexOf("spade"));
console.log(kings.lastIndexOf("spade"));
