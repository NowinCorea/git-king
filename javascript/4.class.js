"use strict";

// object-oriedted programming
// class: template
// object: instance of a class
// javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. class declarations
class King {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speck() {
    console.log(`${this.name}: you are dead already`);
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0){
    // throw console.error(`that's nono`);
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const now = new King("now", "28");
console.log(now.name);
console.log(now.age);
now.speck();

// 2. getter and setters
// age -1은 말이 안됨. 그래서 getter 와 setter를 사용함
const user1 = new King("now1", "-1");
console.log(user1.age);

// 3. Fields (publick, private)
// https://developer.mozilla.org/en-US/doce/Web

class Expriment {
  publicField = 2;
  #privateField = 3.5;
}

const expriment = new Expriment();
console.log(expriment.publicField);
console.log(expriment.privateFied);

// 4. static properties and methods
// Too soon

class Article {
  static publisher = "king is me";
  constructor(articlenumber) {
    this.articlenumber = articlenumber;
  }

  static printpublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);

Article.printpublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("⁂");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "cornflowerblue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

console.clear();
// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      throw Error("unkown");
  }
}
console.log(calculate("adf", 2, 3));
