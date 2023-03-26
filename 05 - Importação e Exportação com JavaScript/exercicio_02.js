/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/

function lista(numeros) {
  let maior = 0;
  let menor = numeros[0];

  for (let i = 0; i < numeros.length; i++) {
    if (maior < numeros[i]) {
      maior = numeros[i];
    }
    if (menor > numeros[i]) {
      menor = numeros[i];
    }
  }

  console.log(`Maior número: ${maior}`);
  console.log(`Menor número: ${menor}`);
}

module.exports.lista = lista;
