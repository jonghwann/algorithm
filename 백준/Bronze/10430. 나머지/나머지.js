const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const [A, B, C] = input.map(Number);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);