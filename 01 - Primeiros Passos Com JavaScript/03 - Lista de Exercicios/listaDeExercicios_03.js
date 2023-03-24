/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de 
etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const valorProduto = 100;
const opcaoPagamento = 4;

if (opcaoPagamento === 1) {
  console.log(`O valor do produto é de R$${valorProduto}
Pagamento à vista no Débito com 10% de desconto será de R$${(valorProduto * 0.9).toFixed(2)}`);
} else if (opcaoPagamento === 2) {
  console.log(`O valor do produto é de R$${valorProduto}
Pagamento à vista no Dinheiro ou PIX com 15% de desconto será de R$${(valorProduto * 0.85).toFixed(2)}`);
} else if (opcaoPagamento === 3) {
  console.log(`O valor do produto é de R$${valorProduto}
Pagamento em 2x sem juros será de R$${valorProduto.toFixed(2)}`);
} else {
  console.log(`O valor do produto é de R$${valorProduto}
Pagamento acima de 2x com 10% de juros será de R$${(valorProduto * 1.1).toFixed(2)}`);
}
