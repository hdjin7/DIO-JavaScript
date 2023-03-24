function calcularIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarIMC(imc) {
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

(function () {
  const altura = 1.7;
  const peso = 52;
  const imc = calcularIMC(peso, altura);

  console.log(classificarIMC(imc));
})();
