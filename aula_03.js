let aluno = "Glaucio";

console.log(aluno);

const ALUNO = "GLAUCIO";

function somar(){
    let aluno2 = "Pedro";

    if(true){
        console.log(aluno2);
        let aluno3 = "João"; //Variaveis do tipo let tem escopo local, no caso aluno3 só existe dentro desse if
        console.log(aluno3);
    }else{
        console.log(aluno3); 
    }

    console.log(aluno3); // Não existe aluno3 nesse escopo

    console.log(aluno2);
}

