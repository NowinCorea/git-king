"use strict";

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "king" && password === "chan") ||
        (id === "kingchan" && password === "isme")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("i love you!"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "kingchan") {
        onSuccess({ name: "chan", role: "king" });
      } else {
        onError(new Error("i am the king"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(id, password, (user) => {
  userStorage.getRoles(
    user,
    (userWithRole) => {
      alert(`Hello ${userWithRole.name}, you have a ${user.role}'s power`);
    },
    (error) => {
      console.log(error);
    }
  );
});
