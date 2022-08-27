'use strict';

function printhello() {
  console.log('hello');
}

printhello();

function log(message) {
  console.log(message);
}

log('im king!!!');

function changename(obj) {
  obj.name = 'kingchan';
}

const king = { name: 'coder' };
changename(king);
console.log(king);

function showmessage(message, from = `that's king me`) {
  console.log(`${message} by ${from}`);
}

showmessage('chanwoo');

function printall(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}

printall('king', 'of', '_now');
console.clear();

let globalmessage = 'global';
function printmessage() {
  let message = 'hello';
  console.log(message);
  console.log(globalmessage);
}

printmessage();

function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum:${result}`);

function upgradeuser(user) {
  if (user.point > 10) {
    //...
  }
}

//good!
function upgradeuser(user) {
  if (user.point <= 10) {
    return;
  }
}

const print = function () {
  console.log('print');
};
print();
const printagaing = print;
printagaing();
const sumagaing = sum;
console.log(sumagaing(1, 3));

function randomquiz(answer, printyes, printno) {
  if (answer === 'scv') {
    printyes();
  } else {
    printno();
  }
}

const printyes = function () {
  console.log('yes!');
};

const printno = function print() {
  console.log('no!');
};

randomquiz('prove', printyes, printno);
randomquiz('scv', printyes, printno);

const simpleprint = () => {
  console.log('simpleprint!');
};

simpleprint();

const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));

(function hello() {
  console.log('IIFE!');
})();
