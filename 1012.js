var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = lines.shift().split(" ").map(item => parseFloat(item));
var pi = 3.14159 

var Triangulo = (A*C)/2;
var Circulo = pi*Math.pow(C,2);
var Trapezio = ((A + B) * C)/2;
var quadrado = B*B;
var retangulo = A * B;

console.log("TRIANGULO: " + Triangulo.toFixed(3));
console.log("CIRCULO: " + Circulo.toFixed(3));
console.log("TRAPEZIO: " + Trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));