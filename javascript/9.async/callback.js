"use strict";

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration.

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// Synchronous callback
function printimmediately(print) {
  print();
}

printimmediately(() => console.log("hello!"));

// Asynchronous callback
function printwidthdelay(print, timeout) {
  setTimeout(print, timeout);
}
printwidthdelay(() => console.log("async callback"), 2000);

console.clear();

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "king" && password === "chan") ||
        (id === "master" && password === "code")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "king") {
        onSuccess({ name: "king", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `welcome my load${userWithRole.name}, you have a ${user.role} role`
        );
      },
      (error) => {}
    );
  },
  (error) => {
    console.log(error);
  }
);
