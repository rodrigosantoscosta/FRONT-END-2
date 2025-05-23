function obterMensagens(){

    var retorno = [];

    var consulta = $.ajax({
        url: 'https://app-p2-js-a2fa67e2c96b.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
        async: false
    }).fail(function(){
        return retorno;
    });

    consulta.done(function(data) {
        retorno = data;
    });

    return retorno;
}

function inserirMensagem(mensagem){

    /*

    var mensagem = {
            nome: "nome da pessoa", 
            email: "email informado", 
            mensagem: "a mensagem informada"} 

    */

    var inserir = $.ajax({

        url: 'https://app-p2-js-a2fa67e2c96b.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(mensagem),
        dataType: 'json',
        async: false,
        contentType: 'application/json',
    });

}

function validarUsuario(objLoginSenha) {

    //email: admin@admin.com
    //senha: '1234'

    /*

    var objLoginSenha = {
            email: "email informado", 
            senha: "senha informada"} 

    */

    var retorno = false;

    var validacao = $.ajax({
        url: 'https://app-p2-js-a2fa67e2c96b.herokuapp.com/usuarios/validar',
        method: 'POST',
        dataType: 'json',
        async: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
                },
        contentType: 'application/json',
        data: JSON.stringify(objLoginSenha)
    }).fail(function(){
        return retorno;
    });

    validacao.done(function(data) {
        retorno = data;
    });

    return retorno;
}   

// 1ª Implementação:
function montarObjMensagem(){

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagemTexto = document.getElementById("msg").value;
    // console.log(nome);
    const mensagem = {
        nome: nome,
        email: email,
        mensagem: mensagemTexto
    };

    inserirMensagem(mensagem);

    console.log("Mensagem enviada!");
}


// 2ª Implementação:
function montarObjLogin(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    
    const objLoginSenha = {
        email: email,
        senha: senha
    };

    
    if(validarUsuario(objLoginSenha)){
        alert("Login efetuado com sucesso");
    }else{
        alert("Usuário e/ou senha inválido")
    }

}

// 3ª Implementação:
function exibirMensagens() {
    const mensagens = obterMensagens(); 
    const tbody = document.querySelector("#tabela-mensagens tbody");

    mensagens.forEach(msg => {
        const linha = document.createElement("tr");

        const colunaNome = document.createElement("td");
        colunaNome.textContent = msg.nome;

        const colunaEmail = document.createElement("td");
        colunaEmail.textContent = msg.email;

        const colunaMensagem = document.createElement("td");
        colunaMensagem.textContent = msg.mensagem;

        linha.appendChild(colunaNome);
        linha.appendChild(colunaEmail);
        linha.appendChild(colunaMensagem);

        tbody.appendChild(linha);
    });
}