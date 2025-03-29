function calcularTotal(precoUnitario, quantidadeComprada){
    return precoUnitario * quantidadeComprada;
}

function aplicarDesconto(valorTotal){
    if (valorTotal > 100.0){
        return valorTotal * 0.9;
    }
}

function exibirResumo(preco, quantidade){
    let total = calcularTotal(preco, quantidade);
    totalComDesconto = aplicarDesconto(total);
    window.alert("Preço unitário: R$" + preco.toFixed(2) + " Quantidade: " + quantidade +"\nTotal sem desconto: R$" 
    + total.toFixed(2) +"\nTotal com desconto de 10%: R$" + totalComDesconto.toFixed(2));
}
 
let preco = parseFloat(prompt("Digite o preço do produto: "));
let quantidade = parseInt(prompt("Digite a quantidade: "));

exibirResumo(preco, quantidade);