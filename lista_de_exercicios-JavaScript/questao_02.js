// 2) Faça um programa que peça 10 números inteiros, calcule e mostre a quantidadedenúmeros pares e a quantidade de números ímpares. Utilize obrigatoriamenteafunção prompt() para coletar os números.

let lista_numeros = []
let pares = 0;
let impares = 0;

for(let i = 0; i < 10; i++){
    let numero = parseInt(prompt("Digite o numero de indice " + (i + 1) + 
    " da lista: "));
    lista_numeros.push(numero);
    if(numero % 2 == 0){
        pares++;
    }else{
        impares++;
    }
}

console.log(lista_numeros);
console.log("Quantidade de numeros pares: " + pares);
console.log("Quantidade de numeros impares: " + impares);