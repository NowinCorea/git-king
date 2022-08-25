'use strict';

console.log('my' + 'king');
console.log('1' + 2);
console.log(`sting literals: 1 + 2 = ${1 + 2}`);

console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

let counter = 2;
const preincrement = ++counter;

console.log(`preincrement:${preincrement}, counter ${counter}`);
const postincrement = counter++;

console.log(`preincrement${preincrement}, counter ${counter}`);

const predecrement = --counter;

console.log(`predecrement ${predecrement}, counter ${counter}`);
const postdecrement = counter--;
console.log(`postdecrement${postdecrement}, counter${counter}`);

let x = 3;
let y = 6;

x += y;
x -= y;
x *= y;
x /= y;
x %= y;

console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

const value1 = false;
const value2 = 4 < 2;
console.clear();
function check() {
  for (let i = 0; i < 10; i++) {
    console.log('절~대로 절대로 모를거야');
  }
  return true;
}

check();
