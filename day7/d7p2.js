const fs = require('fs');

const inputFile = 'day7/input.txt';
// const inputFile = 'day7/input-sample.txt';

// Read the input file and split it into lines
const input = fs.readFileSync(inputFile, 'utf-8').trim().split('\n');

// Use a map of position -> count of streams at that position so parallel branches
// that converge at the same location are counted separately.
let start = input[0].indexOf('S');
let streams = { [start]: 1 };

for (let i = 1; i < input.length; i++) {
    const line = input[i];

    let newStreams = {};
    for (const [posStr, count] of Object.entries(streams)) {
        const pos = Number(posStr);
        const char = line[pos];
        if (char === '^') {
            const left = pos - 1;
            newStreams[left] = (newStreams[left] || 0) + count;
            const right = pos + 1;
            newStreams[right] = (newStreams[right] || 0) + count;
        } else {
            newStreams[pos] = (newStreams[pos] || 0) + count;
        }
    }
    streams = newStreams;
}


const totalStreams = Object.values(streams).reduce((a, b) => a + b, 0);
console.log("Streams:", totalStreams);