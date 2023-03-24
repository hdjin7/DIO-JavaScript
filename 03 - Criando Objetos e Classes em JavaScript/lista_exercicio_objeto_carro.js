/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
  cor;
  marca;
  kmPorLitro;

  constructor(cor, marca, kmPorLitro) {
    this.cor = cor;
    this.marca = marca;
    this.kmPorLitro = kmPorLitro;
  }

  gastoViagem(distanciaEmKm, precoCombustivel) {
      return `Será gasto R$${(distanciaEmKm * this.kmPorLitro *
      precoCombustivel).toFixed(2)} em combustível para realizar este percurso.`;
  }
}

const uno = new Carro("Prata", "Fiat", 1/12);
console.log(uno.gastoViagem(70, 5));
const palio = new Carro("Vermelho", "Fiat", 1/10);
console.log(palio.gastoViagem(70, 5));
