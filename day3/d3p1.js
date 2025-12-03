const fs = require('fs');

// Read the input file and split it into lines
const input = fs.readFileSync('day3/input.txt', 'utf-8').trim().split('\n');
// const input = fs.readFileSync('day3/input-sample.txt', 'utf-8').trim().split('\n');


let sum = 0;

for (let range of input) {
    range = range.split('');
    for (let i = 9; i >= 0; i--) {

        let first = range.indexOf(`${i}`);
        if (first !== -1 && first !== range.length - 1) {

            let secondRange = range.slice(first + 1);

            for (let j = 9; j >= 0; j--) {
                if (secondRange.indexOf(`${j}`) !== -1) {
                    console.log(`${i}${j}`);
                    sum += Number(`${i}${j}`);
                    break;
                }
            }
            break;
        }
    }
}

console.log(sum);