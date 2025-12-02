const fs = require('fs');

// Read the input file and split it into lines
const input = fs.readFileSync('day2/input.txt', 'utf-8').trim().split(',');
// const input = fs.readFileSync('day2/input-sample.txt', 'utf-8').trim().split(',');

let sum = 0;

for (let range of input) {
    const [start, end] = range.split('-').map(Number);
    for (let i = start; i <= end; i++) {
        const str = i.toString();
        let isInvalid = false;
        
        for (let divider = 2; divider <= str.length; divider++) {
            if (str.length % divider !== 0) continue;
            
            let subPart = str.length / divider;
            let subStr = str.substring(0, subPart).repeat(divider);
            if (subStr === str) {
                isInvalid = true;
                break;
            }
        }
        
        if (isInvalid) {
            sum += i;
        }
    }
}

console.log(sum);