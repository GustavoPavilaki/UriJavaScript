var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var R = parseFloat(lines.shift());
var pi = 3.14159;

var Volume = (4/3) * pi * Math.pow(R,3);

console.log("VOLUME = " + Volume.toFixed(3));