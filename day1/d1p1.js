const fs = require('fs');

// Read the input file and split it into lines
const input = fs.readFileSync('day1/input.txt', 'utf-8').trim().split('\n');

let count0 = 0;
let position = 50;

for (const line of input) {
    const dir = line[0];
    const dist = parseInt(line.slice(1), 10);

    if (dir === 'L') {
        position -= dist;
    } else if (dir === 'R') {
        position += dist;
    }

    position = ((position % 100) + 100) % 100;

    if (position === 0) {
        count0 += 1;
    }
}

console.log(count0);