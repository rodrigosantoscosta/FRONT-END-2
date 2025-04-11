// 4) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-seque:
// a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
// b. Em 1996 recebeu aumento de 0,15% sobre seu salário inicial;
// c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondemao dobro do percentual do ano anterior. Faça um programa que determine o salário atual desse funcionário. d. Após concluir isto, faça uma segunda versão do seu código que permitaousuário informar o salário inicial do funcionário. Utilize obrigatoriamenteafunção prompt() para coletar o salário inicial.

const SALARIO_INICIAL = 1000;
let anos = 2025 - 1996;
let aumento_percentual = 0.0015;

let salario = SALARIO_INICIAL;

for(let i = 0; i < anos; i++){
    salario = (aumento_percentual * salario) + salario;
    aumento_percentual = aumento_percentual * 2;
}

console.log("Salario: R$" + salario.toFixed(2));

let salario2 = parseFloat(prompt("Digite o salário inical do funcionário: "));
aumento_percentual = 0.0015;

for(let i = 0; i < anos; i++){
    salario2 = (aumento_percentual * salario2) + salario2;
    aumento_percentual = aumento_percentual * 2;
}

console.log("Salario: R$" + salario2);
