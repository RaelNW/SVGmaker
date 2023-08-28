//import shape class in shape.js
const { Circle, Triangle, Square } = require("./shape");

//Test the functionality of the render method of the circle class
describe("Circle", () => {
  test("Return the rendered value of a circle", () => {
    const newShape = new Circle();
    newShape.setColor("red");
    expect(newShape.render()).toEqual(
      `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="red">`
    );
  });
});

//Test the functionality of the render method of the Triangle class
describe("Triangle", () => {
  test("Return the rendered value of a Triangle", () => {
    const newShape = new Triangle();
    newShape.setColor("red");
    expect(newShape.render()).toEqual(
      `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="red">`
    );
  });
});

//Test the functionality of the render method of the Square class
describe("Square", () => {
  test("Return the rendered value of a Square", () => {
    const newShape = new Square();
    newShape.setColor("red");
    expect(newShape.render()).toEqual(
      `<rect x="50" y="50" height="200" width="200" fill="red">`
    );
  });
});
