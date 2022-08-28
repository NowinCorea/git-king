"use strict";

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. literals and properties
const obj = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function print(obj) {
  console.log(obj.name);
  console.log(obj.age);
}

const king = { name: "kingchan", age: 4 };
print(king);

// with JavaScript magic (dynamically typed language)
// can add propertise later
king.hasjob = true;

// can delete properties later too.
delete king.hasjob;
console.log(king.hasjob);

// 2. Computed properties
console.log(king.name);
console.log(king["name"]);
king["hasjob"] = true;
console.log(king.hasjob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(king, "name");
printValue(king, "age");

// 3.Property value shorthand
const person1 = { name: "bob", age: 23 };
const person2 = { name: "steve", age: 24 };
const person3 = { name: "Jin", age: 25 };
const person4 = makePerson("angle", "???");
console.log(person4);
// 4.Constructor Function
function makePerson(name, age) {
  return {
    //  name: name,
    //   age: age,
    age,
    name,
    //this.name;
    //this.age;
    //return this;
  };
}

console.clear();
// 5. in operator: property existence check (key in obj)
console.log("name" in king);
console.log("age" in king);
console.log("random" in king);
console.log(king.random);

// 6. for..in vs for..of
// for (key in obj)

for (let key in king) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5, 7];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign (dest, [obj1, obj2, obj3...])
const user = { name: "king", age: "20" };
const user2 = user;
user2.name = `it's me`;
console.log(user);

//old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
  user3.name = "kingchan";
}
console.clear();
console.log(user);

console.log(user3);

const user4 = Object.assign({}, user);

console.log(user4);
