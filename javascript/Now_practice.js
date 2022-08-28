'use strict';

class king {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`${this.name}: you are my king!`);
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const now = new king('now', 27);
console.log(now.name);
console.log(now.age);
now.speak();

const user1 = new king('now1', '-1');
console.log(user1.age);

class expriment {
  publicfield = 2;
  #privatefield = 3.5;
}

const expriment1 = new expriment();
console.log(expriment1.publicfield);
console.log(expriment1.privatefield);

class Article {
  static publisher = 'king is me';
  constructor(articlenumber) {
    this.articlenumber = articlenumber;
    console.log(articlenumber);
  }

  static printpublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);

Article.printpublisher();

class Shape {
  constructor(width, height, color = 'colornumhere') {
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
    console.log('^^');
  }

  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'cornflowerblue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

console.clear();
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('i love you ❤');
  }
}

console.log(calculate('multiply', 2, 3));
