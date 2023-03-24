function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100))).toFixed(2);
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros/100))).toFixed(2);
}

function detalharTotalPagamento(valorProduto, opcaoPagamento) {
  if (opcaoPagamento === 1) {
      return `O valor do produto é de R$${valorProduto}
Pagamento à vista no Débito com 10% de desconto será de R$`+ aplicarDesconto(valorProduto, 10);
  } else if (opcaoPagamento === 2) {
    return `O valor do produto é de R$${valorProduto}
Pagamento à vista no Dinheiro ou PIX com 15% de desconto será de R$`+ aplicarDesconto(valorProduto, 15);
  } else if (opcaoPagamento === 3) {
    return `O valor do produto é de R$${valorProduto}
Pagamento em 2x sem juros será de R$${valorProduto.toFixed(2)}`;
  } else {
    return `O valor do produto é de R$${valorProduto}
Pagamento acima de 2x com 10% de juros será de R$`+ aplicarJuros(valorProduto, 10);
  }
}

(function () {
  const valorProduto = 100;
  const opcaoPagamento = 4;

  console.log(detalharTotalPagamento(valorProduto, opcaoPagamento));
})();
