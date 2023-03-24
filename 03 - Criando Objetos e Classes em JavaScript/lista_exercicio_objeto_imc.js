/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / Math.pow(this.altura, 2);
  }

  classificarIMC() {
    const imc = this.calcularIMC();

    if (imc < 18.5) {
      return `Seu IMC é ${imc.toFixed(2)}! Você está abaixo do peso ideal.`;
    } else if (imc >= 18.5 && imc <= 25) {
      return `Seu IMC é ${imc.toFixed(2)}! Você está no peso ideal.`;
    } else if (imc >= 25 && imc <= 30) {
      return `Seu IMC é ${imc.toFixed(2)}! Você está acima do peso ideal.`;
    } else if (imc >= 30 && imc <= 40) {
      return `Seu IMC é ${imc.toFixed(2)}! Você está obeso.`;
    } else {
      return `Seu IMC é ${imc.toFixed(2)}! Você está com obesidade grave.`;
    }
  }
}

const jose = new Pessoa("Jose", 70, 1.75);
console.log(jose.classificarIMC());
const jao = new Pessoa("Jao", 92, 1.71);
console.log(jao.classificarIMC());
const beto = new Pessoa("Beto", 52, 1.7);
console.log(beto.classificarIMC());
