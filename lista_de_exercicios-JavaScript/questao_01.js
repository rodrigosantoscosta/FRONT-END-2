//1) Supondo que a população de um país A seja da ordem de 80000 habitantes com
// uma taxa anual de crescimento de 3% e que a população de B seja 200000
// habitantes com uma taxa anual de crescimento de 1.5%. Faça um programa que
// calcule e escreva o número de anos necessários para que a população do país A
// ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

// const POPULACAO_A = 80000;
// const POPULACAO_B = 200000;
const CRESCIMENTO_ANUAL_A = 0.03;
const CRESCIMENTO_ANUAL_B = 0.015;

let populacao_A = 80000;
let populacao_B = 200000;
let anos = 0;


while(populacao_A < populacao_B){
    populacao_A += populacao_A * CRESCIMENTO_ANUAL_A;
    populacao_B += populacao_B * CRESCIMENTO_ANUAL_B;
    anos++;
}
console.log(populacao_B.toFixed(2));
console.log(populacao_A.toFixed(2));

console.log("É necessário " + anos.toFixed(0) + " anos para  para que a população do país A ultrapasse ou iguale a população do país B");