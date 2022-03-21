var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = lines.shift().split(" ").map(item => parseInt(item));

var MaiorAB = (A + B + Math.abs(A - B)) / 2
var MaiorReal = (C + MaiorAB + Math.abs(C - MaiorAB)) / 2;

console.log(MaiorReal + " eh o maior")
