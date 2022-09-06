"use strict";

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "king" && password === "chan") ||
          (id === "master" && password === "code")
        ) {
          resolve(id);
        } else {
          reject(new Error("i love u ❤"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "king") {
          resolve({ name: "king", role: "dragon" });
        } else {
          reject(new Error("no access!"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) =>
    alert(`welcom my load ${user.name}, you have a ${user.role} role`)
  )
  .catch(console.log);
