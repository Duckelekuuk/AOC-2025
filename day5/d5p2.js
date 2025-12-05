const fs = require('fs');

// Read the input file and split it into lines
const [freshRanges] = fs.readFileSync('day5/input.txt', 'utf-8').trim().split('\n\n').map(section => section.trim().split('\n'));
// const [freshRanges] = fs.readFileSync('day5/input-sample.txt', 'utf-8').trim().split('\n\n').map(section => section.trim().split('\n'));


let computedFreshRanges = [];

const freshPairs = freshRanges
    .map(r => r.trim())
    .filter(Boolean)
    .map(r => r.split('-').map(Number));

freshPairs.sort((a, b) => a[0] - b[0]);

for (const [start, end] of freshPairs) {
    if (computedFreshRanges.length === 0) {
        computedFreshRanges.push([start, end]);
        continue;
    }

    const lastIndex = computedFreshRanges.length - 1;
    const [lastStart, lastEnd] = computedFreshRanges[lastIndex];

    if (start <= lastEnd && end >= lastStart) {
        computedFreshRanges[lastIndex] = [Math.min(start, lastStart), Math.max(end, lastEnd)];
    } else {
        computedFreshRanges.push([start, end]);
    }
}

// Sum ranges
const totalFreshRange = computedFreshRanges.reduce((sum, [start, end]) => sum + (end - start + 1), 0);
console.log('Total fresh ingredient range length:', totalFreshRange);