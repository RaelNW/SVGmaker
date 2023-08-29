# Project SVGmaker

A command-line application that generates simple logos for your projects.

## User Story

As a freelance web developer, I want to generate a simple logo for my projects so that I don't have to pay a graphic designer.

## Acceptance Criteria

- When prompted for text, you can enter up to three characters.
- When prompted for the text color, you can enter a color keyword or a hexadecimal number.
- When prompted for a shape, you are presented with a list of shapes to choose from: circle, triangle, and square.
- When prompted for the shape's color, you can enter a color keyword or a hexadecimal number.
- After entering input for all the prompts, an SVG file is created named `logo.svg`.
- The output text "Generated logo.svg" is printed in the command line.
- When you open the `logo.svg` file in a browser, you are shown a 300x200 pixel image that matches the criteria you entered.

## Usage

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Run node index.js command to start the logo generator:
4. Follow the prompts to enter text, text color, shape, and shape color.
5. Once all prompts are completed, a `logo.svg` file will be generated in the project directory.
6. Install Svg Preview Extension on VS Code if you don't have one already.
7. Right click `logo.svg` and open preview to view the generated logo.

## Dependencies

- Jest
- Node.js
- Inquirer

## Installation

1. Make sure you have Node.js installed on your machine.
2. Clone this repository:

   git clone https://github.com/RaelNW/SVGmaker.git

3. Navigate to the project directory:
   cd SVGmaker
4. Install the required dependencies:

- Jest
- Inquirer

## Credits

Logo generator created by [Rael Wanjala].

## License

None
