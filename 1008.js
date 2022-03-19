var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var Nome = lines.shift();
var SF = parseFloat(lines.shift());
var TVendas = parseFloat(lines.shift());

var Bonus = TVendas * 0.15;

var SalarioFinal = SF + Bonus;

console.log("TOTAL = R$ " + SalarioFinal.toFixed(2))