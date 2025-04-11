// Com o JSON em mãos, faça:

// •Transforme o JSON em objetos JavaScript.
// •Desenvolva
// uma função que receba como parâmetro o objeto acima transformado e
// imprima os seguintes dados: nome, média aritmética e curso.
// •A função só deve imprimir os alunos que tiveram média maior ou igual a 7.

const alunosJSON = '[{ "nome": "Maria Joaquinha", "notas": [8,7.5,9], "curso": "Sistemas para Internet"}, { "nome": "João Ricardo", "notas": [8,8.5,5], "curso": "Direito"}, { "nome": "José Henrique", "notas": [4,10,7], "curso": "Administração"}, { "nome": "Pedro da Silva", "notas": [6,7.6,7.5], "curso": "Sistemas para Internet"}, { "nome": "Silvana Morais", "notas": [6,7.5,9.5], "curso": "Sistemas de Informação"}, { "nome": "Patricia Castro", "notas": [1,9,10], "curso": "Arquitetura"}, { "nome": "Joana Ribeiro", "notas": [8,9,9], "curso": "Contabilidade"}, { "nome": "Rafael Rocha", "notas": [4,4,9], "curso": "Sistemas para Internet"}, { "nome": "Gustavo Henrique", "notas": [8,7.5,5], "curso": "Sistemas para Internet"} ]'

const alunos = JSON.parse(alunosJSON);

function showDetails(aluno){

};

function media (aluno){
    notas = aluno["notas"];
    let soma = 0;
    notas.forEach(nota => {
        soma += nota;
    });

    return (soma / 3).toFixed(2);
};


let teste = alunos[0];

console.log(media(teste));