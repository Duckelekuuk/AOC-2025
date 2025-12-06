const fs = require('fs');

// Read the input file and split it into lines
const input = fs.readFileSync('day6/input.txt', 'utf-8').trim().split('\n').map(line => line.split(' ').filter(Boolean));
// const input = fs.readFileSync('day6/input-sample.txt', 'utf-8').trim().split('\n').map(line => line.split(' ').filter(Boolean));

const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

let totalSum = 0;
for (let i = 0; i < input[0].length; i++) {
    const operator = operators[input[input.length - 1][i]];

    let som = Number(input[0][i]);
    for (let j = 1; j < input.length - 1; j++) {
        som = operator(som, Number(input[j][i]));
    }

    totalSum += som;
}

console.log(totalSum);