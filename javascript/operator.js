// 1. String concatenation
console.log('my' + ' king');
console.log('1' + 2);
console.log(`sting literals: 1 + 2 = ${1 + 2} `);
// \n:줄바꿈
// \t:tab바꿈

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter +1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter:${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter:${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;
x %= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

//||
console.log(`or:${value1 || value2 || check()}`);
console.log(`and:${value1 && value2 && check()}`);

//often used to compress long if-statement
//nullableObject && nullableObject.something
// if (ullableObject != null) {
//     nullableObject.something
// }

function check() {
  for (let i = 0; i < 10; i++) {
    //logic time
    console.log('절대로 절대로 절대로 절~대로 절대로 모를거야');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const king1 = { name: 'chan' };
const king2 = { name: 'chan' };
const king3 = king1;
console.log(king1 == king2);
console.log(king1 === king2);
console.log(king1 === king3);
console.clear();

// equality - puzzler
console.log(0 == false); //t
console.log(0 === false); //f
console.log('' == false); //t
console.log('' === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f

// 8. Conditional operators: if
// if, else if, else
const name = 'King';
if (name === 'King') {
  console.log('You are the King of coder');
} else if (name === 'Kingchan') {
  console.log('you are my load!');
} else {
  console.log('Yeahhhh!!');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'King' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = '';
switch (browser) {
  case 'IE':
    console.log('love you!');
    break;
  case 'Chrome':
    console.log('love you!!');
    break;
  case 'Firefox':
    console.log('love you!!!');
    break;
  default:
    console.log('love you!!!!');
    break;
}
//같은 값일때는 생략가능

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

do {
  console.log(`do while:${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i:${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers
// (use continue)
// for (let i = 0; i < 11; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(`q1.${i}`);
// }

for (let i = 0; i <= 10; i++) {
  i % 2 === 0 ? console.log(i) : '';
}

// Q2. iterate from 0 to 10 and print numbers until
// reaching 8 (use break)
for (let i = 0; i < 10; i++) {
  if (i > 8) {
    break;
  }
  console.log(i);
}
