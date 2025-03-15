let numeros = [1,3,5,8,13];
console.log(numeros);
numeros.forEach(element => {
    console.log(element)
});

console.log(`Segundo elemento do meu array ${numeros[1]}`);
numeros[1] = 4;

console.log(`Segundo elemento do meu array alterado ${numeros[1]}`);
numeros[-1] = 20;
console.log(numeros);
console.log(numeros[-1]);

//Aula 14/03/2025/ Tipo Array e loops (loop for...of e for each... in) e outros metodos da linguagem. Arrays multidimensonais, Map

let bi = [["11","12","13"],["21", "22", "23"]];

console.log(bi[0][0]);