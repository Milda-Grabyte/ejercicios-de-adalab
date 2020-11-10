'use strict';

class Square {
  perimeter(side) {
    const squarePerimeter = side * 4;
    return squarePerimeter;
  }
  area(side) {
    const squareArea = side ** 2;
    return squareArea;
  }
}

const nine = new Square;
const thirtyFour = new Square;

console.log(thirtyFour.perimeter(34));
console.log(thirtyFour.area(34));

////////// MEJORADO:

class Square {
  constructor(side) {
    this.side = side;
  }

  perimeter() {
    const squarePerimeter = this.side * 4;
    return squarePerimeter;
  }
  area() {
    const squareArea = this.side ** 2;
    return squareArea;
  }
}

const nine = new Square(9);
const thirtyFour = new Square(34);

console.log(nine.perimeter());
console.log(nine.area());

//////// MEJORADO:

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }

  perimeter() {
    return this.base * this.numberOfSides;
  }

  area() {
    return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor(side) {
    super(4, side, side);
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }

  area() {
    return super.area() / 2;
  }
}

const squareShape = new Square(7);
const triangleShape = new Triangle(4, 3)
const polygonShape = new Polygon(5, 2, 4);

console.log(squareShape.perimeter());
console.log(squareShape.area());

console.log(triangleShape.perimeter());
console.log(triangleShape.area());

console.log(polygonShape.perimeter());
console.log(polygonShape.area());