
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');  // second para - character encoding
const second = readFileSync('./content/second.txt', 'utf-8');


writeFileSync('./content/reult-sync.txt',  // new file
    `result is: ${first}, ${second}`,
    {flag: 'a'}  // append
)