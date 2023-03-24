/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;
*/

const precoCombustivel = 5.79;
const gastoMedioKM = 10;
const distanciaViagem = 100;

console.log(
  `O valor total da viagem será de R$${(
    precoCombustivel *
    (distanciaViagem / gastoMedioKM)
  ).toFixed(2)}`
);
