const { count } = require('console');
const fs = require('fs');

const input = fs.readFileSync('day1/input.txt', 'utf-8').trim().split('\n');

let count0 = 0;
let position = 50;
const MOD = 100;

for (const line of input) {
    const dir = line[0];
    const dist = parseInt(line.slice(1), 10);

    count0 += Math.floor(dist / MOD);
    
    const rem = dist % MOD;
    
    if (dir === 'L') {
        if (position > 0 && rem >= position) {
            count0 += 1;
        }
        position = (position - dist) % MOD;
        if (position < 0) position += MOD;
    } else if (dir === 'R') {
        if (position + rem >= MOD) {
            count0 += 1;
        }
        position = (position + dist) % MOD;
    }
}

console.log(count0);