let score = 0;
let life = 3;

while (true) {
  let number1 = Math.floor(Math.abs(Math.random() * (100 - 0) + 0));
  let number2 = Math.floor(Math.abs(Math.random() * (100 - 0) + 0));
  let result = number1 + number2;

  console.log(`Resultado: ${result}`);

  let enteredValue = console.log(
    `Quanto é ${number1} + ${number2}? \n - - - - - - - - - - - - - - \n PONTOS: ${score} \n VIDAS: ${life} \n  - - - - - - - - - - - - - - `
  );

  if (enteredValue == result) {
    score += 5;
  } else {
    life -= 1;
    console.log(
      `- - - - - - - - - - - - - - \n PONTOS: ${score} \n VIDAS: ${life} \n  - - - - - - - - - - - - - - `
    );
    if (life == 0) {
      console.log(
        `GAMER OVER! \n - - - - - - - - - - - - - - \n PONTOS: ${score} \n  - - - - - - - - - - - - - - `
      );
      break;
    }
  }
}
