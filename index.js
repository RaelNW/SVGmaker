//import classes and functions
const { Triangle, Square, Circle } = require("./lib/shape");
const fs = require("fs");
const inquirer = require("inquirer");

class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${this.shapeElement}
    ${this.textElement}
    </svg>`;
  }

  //generate SVG text element
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  //generate SVG shape element
  setShapeElement(shape, color) {
    shape.setColor(color); // Set the color of the shape
    this.shapeElement = shape.render();
  }

  //reset the SVG generator
  clearElements() {
    this.textElement = "";
    this.shapeElement = "";
  }
}

//Prompt users
function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Type the 3 characters you would like to appear on your logo:",
        name: "text",
      },
      {
        type: "input",
        message: "Choose your text color",
        name: "textColor",
      },
      {
        type: "list",
        message: "What shape would you like on your logo?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message: "What color would you like your logo to be?",
        name: "shapeColor",
      },
    ])
    //use user answers to generate svg
    .then((data) => {
      const svgGenerator = new Svg();

      svgGenerator.setTextElement(data.text, data.textColor); //pass text and text-color to text element

      let shape;
      switch (data.shape) {
        case "Triangle":
          shape = new Triangle(data.shapeColor);
          break;
        case "Square":
          shape = new Square(data.shapeColor);
          break;
        case "Circle":
          shape = new Circle(data.shapeColor);
          break;
        default:
          break;
      }

      if (shape) {
        svgGenerator.setShapeElement(shape, data.shapeColor); // Pass color to setShapeElement
      }

      const svgContent = svgGenerator.render();

      // Write the SVG content to a file
      fs.writeFileSync("logo.svg", svgContent, "utf-8");
    });
}

promptUser();
