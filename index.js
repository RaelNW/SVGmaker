//import classes and functions
const { Shape, Triangle, Square, Circle } = require("./lib/shape");
const fs = require("fs");
const inquirer = require("inquirer");

class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }

  //generate SVG text element
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  //generate SVG shape element
  setShapeElement(shape) {
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
  inquirer.prompt([
    {
      type: "input",
      message: "Type the 3 characters you would like to appear on your logo:",
      name: "text",
    },
    {
      type: "input",
      message: "Chose your text color",
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
      message: "what color would you like your logo to be?",
      name: "BackgroundColor",
    },
  ]);
}

promptUser();
