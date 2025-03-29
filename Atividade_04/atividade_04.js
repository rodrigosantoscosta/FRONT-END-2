function calcularTotal(precoUnitario, quantidadeComprada){
    return precoUnitario * quantidadeComprada;
}

function aplicarDesconto(valorTotal){
    if (valorTotal > 100.0){
        return valorTotal * 0.9;
    }else{
        console.log("Não é possivel aplicar o desconto! Compra abaixo de R$100,00")
        return valorTotal;
    }
}

function temDesconto(valorTotal){
    if(valorTotal> 100.0){
        return true;
    }else{
        return false;
    }
}

function exibirResumo(preco, quantidade){
    let total = calcularTotal(preco, quantidade);
    totalComDesconto = aplicarDesconto(total);
    window.alert("Preço unitário: R$" + preco.toFixed(2) + " Quantidade: " + quantidade +"\nTotal: R$" 
    + total.toFixed(2) + (temDesconto(total) ? "\nTotal com desconto de 10%: R$" + totalComDesconto.toFixed(2) : "\n"));
}
 
let preco = parseFloat(prompt("Digite o preço do produto: "));
let quantidade = parseInt(prompt("Digite a quantidade: "));

exibirResumo(preco, quantidade);