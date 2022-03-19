var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [P1, NP1, VP1] = lines.shift().split(" ");
var [P2, NP2, VP2] = lines.shift().split(" ");

var Valor1 = NP1 * VP1;
var Valor2 = NP2 * VP2;

var Pagar = Valor1 + Valor2;

console.log("VALOR A PAGAR: R$ " + Pagar.toFixed(2))