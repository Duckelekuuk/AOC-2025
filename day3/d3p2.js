const fs = require('fs');

// Read the input file and split it into lines
const input = fs.readFileSync('day3/input.txt', 'utf-8').trim().split('\n');
// const input = fs.readFileSync('day3/input-sample.txt', 'utf-8').trim().split('\n');


let sum = 0;

for (let range of input) {
    let digits = range.split('');
    const toRemove = digits.length - 12;
    
    for (let k = 0; k < toRemove; k++) {
        let removed = false;
        for (let i = 0; i < digits.length - 1; i++) {
            if (digits[i] < digits[i + 1]) {
                digits.splice(i, 1);
                removed = true;
                break;
            }
        }
        
        if (!removed) {
            digits.pop();
        }
    }

    const joltage = Number(digits.join(''));
    console.log(joltage);
    sum += joltage;
}

console.log('\nTotal joltage:', sum);