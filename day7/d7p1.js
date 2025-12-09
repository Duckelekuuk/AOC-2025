const fs = require('fs');

const inputFile = 'day7/input.txt';
// const inputFile = 'day7/input-sample.txt';

// Read the input file and split it into lines
const input = fs.readFileSync(inputFile, 'utf-8').trim().split('\n');

let splits = 0;

let streams = [input[0].indexOf('S')];

for (let i = 1; i < input.length; i++) {
    const line = input[i];

    let newStreams = [];
    for (let stream of streams) {
        const char = line[stream];   
        if (char === '^') {
            splits++;
            newStreams.push(stream - 1);
            newStreams.push(stream + 1);
        } else {
            newStreams.push(stream);
        }
    }
    // Remove duplicates
    newStreams = [...new Set(newStreams)];
    streams = newStreams;
    // log the line with the streams positions marked |
    let lineChars = line.split('');
    for (let stream of streams) {
        lineChars[stream] = '|';
    }
    console.log(lineChars.join('') + " - " + splits + ' - ' + (streams.length));;
}


console.log("Splits: " , splits);