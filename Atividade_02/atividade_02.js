let alturas = [];
let altura_homens = [];
let qtd_mulheres = 0;
let qtd_homens = 0;

for(let i = 0; i < 15; i++){
    let altura = prompt(`Digite a altura da pessoa nº ${i + 1}  da lista`); 
    let genero = prompt(`Digite o genero da pessoa nº ${i + 1}  da lista`);
    //Certificando que some e nao concatene strings na hora
    // de fazer a media, lembrar de estudar as conversões de tipo corretamente para formatação para logging
    altura = parseFloat(altura);
    alturas.push(altura);

    if (genero === 'm'){
        altura_homens.push(altura);
        qtd_homens += 1;
    }else if (genero === 'f'){
        qtd_mulheres += 1;
    }
};

let soma_homens = 0;
for (let i = 0; i < altura_homens.length; i++) {
    soma_homens += altura_homens[i];
}

let media_homens = (soma_homens) / (altura_homens.length);
// console.log(altura_homens.length);
// console.log(soma_homens);

// console.log(altura_homens);
// console.log(qtd_mulheres);
// alturas.forEach(altura => {
//     console.log(altura);
// });


console.log(`A maior altura do grupo é de ${Math.max(...alturas).toFixed(1)} centímetros, 
a menor altura é de ${Math.min(...alturas)} centímetros.`);
console.log(`O número de pessoas do gênero feminino é ${qtd_mulheres}.`);
console.log(`A média de altura dos homens é ${media_homens.toFixed(1)} centímetros.`);