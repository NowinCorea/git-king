"use strict";

function printhello() {
  console.log("hello");
}

printhello();

function log(message) {
  console.log(message);
}

log("open the door!!");

function changename(obj) {
  obj.name = "drrrrr";
}
const king = { name: "coder" };
changename(king);
console.log(king.name);

function showmessage(message, from = "whos?") {
  console.log(`${message} by ${from}`);
}

showmessage("you are mine.");

function printall(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

printall("yes", "im", "king");

let globalmessage = "global";
function printmessage() {
  let message = "hello";
  console.log(message);
  console.log(globalmessage);
}

printmessage();

function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum:${sum(1, 2)}`);

const print = function () {
  console.log("print");
};
print();
const printagain = print;
printagain();
const sumagain = sum;
console.log(sumagain(1, 3));

function randomq(answer, printyes, printno) {
  if (answer === "scv") {
    printyes();
  } else {
    printno();
  }
}

const printyes = function () {
  console.log("yes!");
};
const printno = function () {
  console.log("no!");
};
randomq("prove", printyes, printno);
randomq("scv", printyes, printno);

const simpleprint = () => {
  console.log("simpleprint!");
};

const add = (a, b) => {
  return a + b;
};

console.log(add(1, 3));

(function hello() {
  console.log("come on!");
})();
console.clear();

function calc(obj) {
  for (let i = 0; i < obj.item.length; i++) {
    console.log(obj.item[i]);
  }
}

let card = {
  item: ["heart", "spade", "clover", "dia"],
  looks: [123, 435, 5678],
};
calc(card);
