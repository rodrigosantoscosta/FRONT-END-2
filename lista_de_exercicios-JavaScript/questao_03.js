// 3) Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.

let lista = []
let lista_size = parseInt(prompt("Digite o tamanho da lista: "));

for(let i = 0; i < lista_size; i++){
    let lista_item = parseFloat(prompt("Digite o valor do indice " + (i + 1) + "da lista: "));
    lista.push(lista_item);
}

let maior = lista[0];
let menor = lista[0];
let next = 0;
let soma = 0;

for(let i = 0; i < lista_size; i++){
    
    next = i+1;
    
    if(next > lista_size){
        break;
    }
    
    if(lista[next] > maior){
        maior = lista[next];
    }

    if(lista[next] < menor){
        menor = lista[next];
    }
    
    soma += lista[i];
}


console.log("Maior valor da lista: " + maior);
console.log("Menor valor da lista: " + menor);
console.log("Soma dos valores da lista: " + soma);
console.log(lista);