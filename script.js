let score = 0;
let life = 3;
let level = 10;

let result = null;
let operator = null;

let subtraction = 0;
let addition = 1;
let multiplication = 2;
let division = 3;

while (life > 0) {
  let number1 = Math.floor(Math.abs(Math.random() * (level - 0)));
  let number2 = Math.floor(Math.abs(Math.random() * (level - 0)));
  let operation = Math.floor(Math.abs(Math.random() * (3 - 0)));

  if (operation == subtraction) {
    result = number1 - number2;
    operator = "-";
  }
  if (operation == addition) {
    result = number1 + number2;
    operator = "+";
  }
  if (operation == multiplication) {
    result = number1 * number2;
    operator = "*";
  }
  if (operation == division) {
    result = number1 / number2;
    operator = "/";
  }

  console.log(`Resultado: ${result}`);

  let enteredValue = prompt(
    `Quanto é ${number1} ${operator} ${number2}? \n - - - - - - - - - - - - - - \n PONTOS: ${score} \n VIDAS: ${life} \n  - - - - - - - - - - - - - - `
  );

  if (enteredValue == result) {
    score += 5;
    if (score % 20 == 0) {
      level += 10;
    }
  } else {
    life -= 1;
    alert(
      `- - - - - - - - - - - - - - \n PONTOS: ${score} \n VIDAS: ${life} \n  - - - - - - - - - - - - - - `
    );
  }
}

alert(
  `GAMER OVER! \n - - - - - - - - - - - - - - \n VOCÊ FEZ PONTOS ${score} PONTOS .\n  - - - - - - - - - - - - - - `
);
