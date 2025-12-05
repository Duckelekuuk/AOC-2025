const fs = require('fs');

// Read the input file and split it into lines
const [freshRanges, inventory] = fs.readFileSync('day5/input.txt', 'utf-8').trim().split('\n\n').map(section => section.trim().split('\n'));
// const [freshRanges, inventory] = fs.readFileSync('day5/input-sample.txt', 'utf-8').trim().split('\n\n').map(section => section.trim().split('\n'));

let totalFresh = 0;

for (const ingredient of inventory) {
    if (isFresh(Number(ingredient))) {
        totalFresh += 1;
    }
}

function isFresh(ingredient) {
    for (const range of freshRanges) {
        const [minFresh, maxFresh] = range.split('-').map(Number);
        if (ingredient >= minFresh && ingredient <= maxFresh) {
            return true;
        }
    }
    return false;
}


console.log(`Total fresh ingredients in inventory: ${totalFresh}`);