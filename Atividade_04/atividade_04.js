function calcularTotal(preco, quantidade) {
    return preco * quantidade;
}

function aplicarDesconto(valorTotal) {
    return valorTotal > 100 ? valorTotal * 0.9 : valorTotal;
}

function exibirResumo() {
    let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"));
    let quantidade = parseInt(prompt("Digite a quantidade comprada:"));

    if (isNaN(precoUnitario) || isNaN(quantidade) || precoUnitario <= 0 || quantidade <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    let valorTotal = calcularTotal(precoUnitario, quantidade);
    let valorFinal = aplicarDesconto(valorTotal);

    alert(`Resumo da compra:\n- Valor total antes do desconto: R$ ${valorTotal.toFixed(2)}\n- Valor final com desconto: R$ ${valorFinal.toFixed(2)}`);
}

document.getElementById("meuBotao").addEventListener("click", exibirResumo);
