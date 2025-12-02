const fs = require('fs');

// Read the input file and split it into lines
const input = fs.readFileSync('day2/input.txt', 'utf-8').trim().split(',');
// const input = fs.readFileSync('day2/input-sample.txt', 'utf-8').trim().split(',');

let sum = 0;

for (let range of input) {
    const [start, end] = range.split('-').map(Number);
    for (let i = start; i <= end; i++) {
        const str = i.toString();
        if (str.substring(0, str.length / 2) === str.substring(str.length / 2)) {
            sum += i;
        }
    }
}

console.log(sum);