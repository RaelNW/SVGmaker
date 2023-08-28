//Create a class of shapes and set their color using the setColor method.
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

//Define the shapes and  render to return  SVG string
class Circle extends Shape {
  render() {
    //sets the position, size and fill color of a circle
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="50" height="200" width="200" fill="${this.color}">`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`;
  }
}

//Export
module.export = { Circle, Square, Triangle };
