'use strict';

//Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log('Hello');
}

printHello();

function log(message) {
  console.log(message);
}

log('Kingchan!');

// 2. Prameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'kingchan';
}
const king = { name: 'coder' };
changeName(king);
console.log(king);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'whos?') {
  console.log(`${message} by ${from}`);
}

showMessage('you are mine.');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  //==
  for (const arg of args) {
    console.log(arg);
  }
  //==
  args.forEach((arg) => console.log(arg));
}

printAll('king', 'of', '_Now');
console.clear();

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
}

printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum:${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrad logic...
  }
}

// good!
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrad logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  // anonymous function 이름이 있으며 named function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'SCV') {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log('yes!');
};

// named function
// better debuggin in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
};
randomQuiz('prove', printYes, printNo);
randomQuiz('SCV', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => {
  console.log('simplePrint!');
};

const add = (a, b) => {
  //do somthing more?
  return a + b;
};

add(1, 2);

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();
