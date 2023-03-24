/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço do gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

imprimar no console o valor que será gasto para realizar esta viagem
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const gastoMedioKM = 10;
const distanciaViagem = 100;

let tipoCombustivel = "Etanol";

if (tipoCombustivel === "Etanol") {
  console.log(
    `O valor da viagem com Etanol será de R$${(
      precoEtanol *
      (distanciaViagem / gastoMedioKM)
    ).toFixed(2)}`
  );
} else {
  console.log(
    `O valor da viagem com Gasolina será de R$${(
      precoGasolina *
      (distanciaViagem / gastoMedioKM)
    ).toFixed(2)}`
  );
}
