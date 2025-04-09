let C = parseFloat(prompt("Digite o capital inicial investido: "));
let i = (parseFloat(prompt("Digite a porcentagem da taxa de juros: "))) / 100;
let t = parseInt(prompt("Digite o tempo de investimento em meses"));
let M = C * Math.pow(1 + i,t);

console.log("O montante do investimento é R$" + M.toFixed(2));