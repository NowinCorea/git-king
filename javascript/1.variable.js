'use strict';

// 2.Variable, rw(read/write)
// let (added in ES6)

let name1 = 'King';
console.log(name1);
name1 = 'King is Chan!';
console.log(name1);

let globalName = 'KingChan';
{
  let codename = 'yes load';
  console.log(codename);
  codename = 'hello';
  console.log(codename);
  console.log(globalName);
}
console.log(globalName);

// var 쓰면 안되는 이유
// var hoisting(가장 위로 끌어올려준다. 선언이 어디에 되어있는지 상관 없이 가장 위로 올린다.)
// ignore block. 선언한 변수가 다른곳에서도 나옴.

// 3.constants, r(read only);
// use const whenever possible.
// only use let if variable nees to change.
const daysInWeek = 7;
const maxNumber = 5;

console.log(daysInWeek);

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type alwaysw for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4.variable types
// primitive(:가장 작은 인자), single item: number, string, boolean, null, undefiend, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speical numeric values: infinity, -infinity, NaN;
const infinity = 1 / 0;
const negativeinfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negaiveInfinity);
console.log(nAn);

// 새로 추가 된 bigInt (fairly new, don't use it yet only crome, firefox)
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;
// string
const char = 'c';
const king = 'king';
const greeting = 'hello' + king;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloking = `hi ${king}!`; // tempate literals (string)
console.log(`value: ${helloking}, type: ${typeof helloking}`);

// boolean
// false:0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value:${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value:${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol === symbol2);
console.log(`value:${symbol.description}, type: ${typeof symbol}`);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value:${text}, type:${typeof text}`);
text = 2;
console.log(`value:${text}, type:${typeof text}`);
text = '6' + 2;
console.log(`value:${text}, type:${typeof text}`);
text = '8' / '2';
console.log(`value:${text}, type:${typeof text}`);
