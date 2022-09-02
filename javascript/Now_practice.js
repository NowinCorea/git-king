"use strict";

class king {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name}: you are dead already.`);
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const now = new king("now", "28");
console.log(now.name);
console.log(now.age);
now.speak();

const user1 = new king("now1", "-1");
console.log(user1.age);

class ex {
  public = 2;
  #private = 3.5;
}

const exm = new ex();
console.log(exm.public);
console.log(exm.private);

console.clear();

class Article {
  static publisher = "king is me!!";
  constructor(article) {
    this.article = article;
  }

  static printpub() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.public);

Article.printpub();

class shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getarea() {
    return this.width * this.height;
  }
}

class Rectangle extends shape {}
class Triangle extends shape {
  draw() {
    super.draw();
    console.log("^-^");
  }

  getarea() {
    return (this.width * this.height) / 2;
  }

  tostring() {
    return `Triangle: color ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "cornflowerblue");
rectangle.draw();
console.log(rectangle.getarea());

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getarea());

console.clear();

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof shape);
console.log(triangle instanceof Object);
console.log(triangle.tostring());

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      throw Error("i ❤ U");
  }
}

console.log(calculate("add", 2, 3));
