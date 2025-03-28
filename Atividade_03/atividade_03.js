let nomes = ["Alexander", "Pablo", "Pedro","Ridael", "João"];

console.log("Terceiro elemento da lista de nomes: " + nomes[2]);

nomes.pop();


console.log("\nArray atualizado após remover o ultimo elemento: ");
console.log(nomes);

function mult2(element){
    return element * 2;
}

let numeros = [2,4,6,8]
let array_dobrado = numeros;
console.log("\nArray [2, 4, 6, 8] dobrado usando map(): ");
console.log(array_dobrado.map(array_dobrado => array_dobrado * 2));

let outros_numeros = [1,3,5,7,9];
let numeros_menores_q5 = outros_numeros;

function verificaMenorQue_5(numero){
    if (numero < 5){
        return numero;
    }
}
console.log("\nArray com numeros menores que 5: ");
console.log(numeros_menores_q5.filter((numero) => numero < 5));
