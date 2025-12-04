const fs = require('fs');

// Read the input file and split it into lines
const input = fs.readFileSync('day4/input.txt', 'utf-8').trim().split('\n');
// const input = fs.readFileSync('day4/input-sample.txt', 'utf-8').trim().split('\n');

const grid = input.map(line => line.split(''));

let accessableRolls = 0;

for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
        const cell = grid[row][col];

        if (cell !== '@') continue;

        // Check 8 surrounding cells and count how many are @ neighbors
        let neighborCount = 0;
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue; // Skip the cell itself
                const newRow = row + dr;
                const newCol = col + dc;
                if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[row].length) {
                    if (grid[newRow][newCol] === '@') {
                        neighborCount++;
                    }
                }
            }
        }

        if (neighborCount < 4) {
            accessableRolls++;
        }
    }
}

console.log(accessableRolls);