const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const A = Number(input[0]);
const B = input[1];

const digits = B.split('').map(Number);

console.log(A * digits[2]);
console.log(A * digits[1]);
console.log(A * digits[0]);
console.log(A * Number(B));
