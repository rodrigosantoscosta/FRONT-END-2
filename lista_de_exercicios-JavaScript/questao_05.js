const PI = 3.14159
r = parseFloat(prompt("Digite o raio: "));
let perimetro = 2 * PI * r;
let area = PI * Math.pow(r,2);
console.log("O perimetro do circulo de raio " + r +" é " + perimetro.toFixed(2) + " e a area é " + area.toFixed(2));