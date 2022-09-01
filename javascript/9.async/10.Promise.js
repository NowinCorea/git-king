"use strict";

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    // resolve("kingchan!");
    reject(new Error("yeap!"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
//
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("^^");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Hanling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("checken"), 1000);
  });

// const getEgg = (hen) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${hen} => egg`), 1000);
//   });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => egg`)));
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => cooked`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch((error) => {
    return "bread";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
// .then((hen) => getEgg(hen))
// .then((egg) => cook(egg))
// .then((meal) => console.log(meal));
