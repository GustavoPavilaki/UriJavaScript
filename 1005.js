var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());

var media = (A * 3.5 + B * 7.5 ) / 11.0;
console.log("Media = " + media.toFixed(5));