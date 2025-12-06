const fs = require('fs');

// Read the input file and split it into lines
const input = fs.readFileSync('day6/input.txt', 'utf-8').trim().split("\n").map(char => char.split(""));
// const input = fs.readFileSync('day6/input-sample.txt', 'utf-8').trim().split("\n").map(char => char.split(""));

const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

let totalSum = 0;

let currentNumbers = [];

for (let i = input[0].length - 1; i >= 0; i--) {
    const operatorChar = input[input.length - 1][i];
    const operator = operators[operatorChar];

    // Build one number from this column by reading top to bottom
    let columnNumber = "";
    for (let j = 0; j < input.length - 1; j++) {
        const char = input[j][i];
        if (char !== " " && !isNaN(char)) {
            columnNumber += char;
        }
    }

    // If this column has digits, add it to our list of numbers
    if (columnNumber !== "") {
        currentNumbers.push(Number(columnNumber));
    }

    // When we hit a non-space in the operator row, we've completed a problem
    if (operatorChar !== " " && operator) {
        if (currentNumbers.length > 0) {
            const result = currentNumbers.reduce((a, b) => operator(a, b));
            totalSum += result;
        }
        
        // Reset for next problem
        currentNumbers = [];
    }
}

console.log(totalSum);