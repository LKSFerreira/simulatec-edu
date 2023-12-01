//! Por este projeto ser open source e tem commo seu core sobre tudo a questão de aprendizado.
//? Estarei commitando os estudos sobre a prática do desenvolvimento de testes unitários com Jest e TDD.

const calculadora = require("../models/calculadora.js");

test("Somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Somar 2 + 100 (vice-versa) deveria retornar 102", () => {
  const resultado = calculadora.somar(2, 100);
  expect(resultado).toBe(102);

  const resultado2 = calculadora.somar(100, 2);
  expect(resultado2).toBe(102);
});

test("Somar 2 numeros pares quaisquer (vice-versa) deveria retornar 1 numero par", () => {
  const numeroPar1 = gerarNumero("par");
  const numeroPar2 = gerarNumero("par");

  const resultado = calculadora.somar(numeroPar1, numeroPar2);
  expect(resultado % 2).toBe(0);

  const resultado2 = calculadora.somar(numeroPar2, numeroPar1);
  expect(resultado2 % 2).toBe(0);
});

test("Somar 2 numeros impares (vice-versa) deveria retornar 1 numero par", () => {
  const numeroImpar1 = gerarNumero("impar");
  const numeroImpar2 = gerarNumero("impar");

  const resultado = calculadora.somar(numeroImpar1, numeroImpar2);
  expect(resultado % 2).toBe(0);

  const resultado2 = calculadora.somar(numeroImpar2, numeroImpar1);
  expect(resultado2 % 2).toBe(0);
});

test("Somar 1 numero par e 1 numero impar (vice-versa) deveria retornar 1 numero impar", () => {
  const numeroPar = gerarNumero("par");
  const numeroImpar = gerarNumero("impar");

  const resultado = calculadora.somar(numeroPar, numeroImpar);
  expect(resultado % 2).toBe(1);

  const resultado2 = calculadora.somar(numeroImpar, numeroPar);
  expect(resultado2 % 2).toBe(1);
});

test("Somar 1 numero qualquer com 0 (vice-versa) deveria retornar ele mesmo", () => {
  const numeroQualquer = gerarNumeroAleatorio();

  const resultado = calculadora.somar(numeroQualquer, 0);
  expect(resultado).toBe(numeroQualquer);

  const resultado2 = calculadora.somar(0, numeroQualquer);
  expect(resultado2).toBe(numeroQualquer);
});

test("Somar 1 numero qualquer com 1 (vice-versa) deveria retornar o sucessor", () => {
  const numeroQualquer = gerarNumeroAleatorio();

  const resultado = calculadora.somar(numeroQualquer, 1);
  expect(resultado).toBe(numeroQualquer + 1);

  const resultado2 = calculadora.somar(1, numeroQualquer);
  expect(resultado2).toBe(numeroQualquer + 1);
});

test("Somar 1 numero qualquer com -1 (vice-versa) deveria retornar o antecessor", () => {
  const numeroQualquer = gerarNumeroAleatorio();

  const resultado = calculadora.somar(numeroQualquer, -1);
  expect(resultado).toBe(numeroQualquer - 1);

  const resultado2 = calculadora.somar(-1, numeroQualquer);
  expect(resultado2).toBe(numeroQualquer - 1);
});

test("Somar 1 numero qualquer com ele mesmo (vice-versa) deveria retornar o dobro", () => {
  const numeroQualquer = gerarNumeroAleatorio();

  const resultado = calculadora.somar(numeroQualquer, numeroQualquer);
  expect(resultado).toBe(numeroQualquer * 2);

  const resultado2 = calculadora.somar(numeroQualquer, numeroQualquer);
  expect(resultado2).toBe(numeroQualquer * 2);
});

test("a + b == c, onde (c - b == a) & (c - a == b)", () => {
  const numeroQualquer1 = gerarNumeroAleatorio();
  const numeroQualquer2 = gerarNumeroAleatorio();

  const resultado = calculadora.somar(numeroQualquer1, numeroQualquer2);
  expect(numeroQualquer1).toBe(resultado - numeroQualquer2);

  const resultado2 = calculadora.somar(numeroQualquer2, numeroQualquer1);
  expect(numeroQualquer2).toBe(resultado2 - numeroQualquer1);
});

test("a + b == b + a", () => {
  const numeroQualquer1 = gerarNumeroAleatorio();
  const numeroQualquer2 = gerarNumeroAleatorio();

  const resultado = calculadora.somar(numeroQualquer1, numeroQualquer2);
  const resultado2 = calculadora.somar(numeroQualquer2, numeroQualquer1);
  expect(resultado).toBe(resultado2);
});

test("a + b + c == a + (b + c) == (a + b) + c", () => {
  const numeroQualquer1 = gerarNumeroAleatorio();
  const numeroQualquer2 = gerarNumeroAleatorio();
  const numeroQualquer3 = gerarNumeroAleatorio();

  const resultado = calculadora.somar(
    numeroQualquer1,
    calculadora.somar(numeroQualquer2, numeroQualquer3),
  );
  const resultado2 = calculadora.somar(
    calculadora.somar(numeroQualquer1, numeroQualquer2),
    numeroQualquer3,
  );
  const resultado3 = calculadora.somar(
    numeroQualquer1,
    calculadora.somar(numeroQualquer2, numeroQualquer3),
  );
  expect(resultado).toBe(resultado2);
  expect(resultado).toBe(resultado3);
});

test("Somar 2 números positivos e (vice-versa) deveria retornar um número positivo", () => {
  const numeroQualquer1 = gerarNumeroAleatorio();
  const numeroQualquer2 = gerarNumeroAleatorio();

  const resultado = calculadora.somar(numeroQualquer1, numeroQualquer2);
  expect(resultado).toBeGreaterThan(0);

  const resultado2 = calculadora.somar(numeroQualquer2, numeroQualquer1);
  expect(resultado2).toBeGreaterThan(0);
});

test("Somar 1 número negativo com 1 positivo e (vice-versa) deveria retornar a subtração", () => {
  const numeroQualquer1 = gerarNumeroAleatorio();
  const numeroQualquer2 = gerarNumeroAleatorio();

  const resultado = calculadora.somar(numeroQualquer1, -numeroQualquer2);
  const resultado2 = calculadora.somar(-numeroQualquer1, numeroQualquer2);
  expect(resultado).toBe(numeroQualquer1 - numeroQualquer2);
  expect(resultado2).toBe(numeroQualquer2 - numeroQualquer1);
});

test("Somar 2 números negativos (vice-versa) deveria retornar 1 número negativo", () => {
  const numeroQualquer1 = gerarNumeroAleatorio();
  const numeroQualquer2 = gerarNumeroAleatorio();

  const resultado = calculadora.somar(-numeroQualquer1, -numeroQualquer2);
  expect(resultado).toBeLessThan(0);

  const resultado2 = calculadora.somar(-numeroQualquer2, -numeroQualquer1);
  expect(resultado2).toBeLessThan(0);
});

test("Somar 2 números iguais (vice-versa) com sinais opostos deveria retornar 0", () => {
  const numeroQualquer = gerarNumeroAleatorio();

  const resultado = calculadora.somar(numeroQualquer, -numeroQualquer);
  expect(resultado).toBe(0);

  const resultado2 = calculadora.somar(-numeroQualquer, numeroQualquer);
  expect(resultado2).toBe(0);
});

test("Somar 1 número com qualquer coisa que não seja 1 número deveria retornar NaN", () => {
  const numeroQualquer = gerarNumeroAleatorio();

  const resultado = calculadora.somar(numeroQualquer, "qualquer coisa");
  expect(isNaN(resultado)).toBe(true);

  const resultado2 = calculadora.somar("qualquer coisa", numeroQualquer);
  expect(isNaN(resultado2)).toBe(true);

  const resultado3 = calculadora.somar(numeroQualquer, true);
  expect(isNaN(resultado3)).toBe(true);

  const resultado4 = calculadora.somar(true, numeroQualquer);
  expect(isNaN(resultado4)).toBe(true);

  const resultado5 = calculadora.somar(numeroQualquer, null);
  expect(isNaN(resultado5)).toBe(true);

  const resultado6 = calculadora.somar(null, numeroQualquer);
  expect(isNaN(resultado6)).toBe(true);

  const resultado7 = calculadora.somar(numeroQualquer, undefined);
  expect(isNaN(resultado7)).toBe(true);

  const resultado8 = calculadora.somar(undefined, numeroQualquer);
  expect(isNaN(resultado8)).toBe(true);

  const resultado9 = calculadora.somar(numeroQualquer, {});
  expect(isNaN(resultado9)).toBe(true);

  const resultado10 = calculadora.somar({}, numeroQualquer);
  expect(isNaN(resultado10)).toBe(true);

  const resultado11 = calculadora.somar(numeroQualquer, []);
  expect(isNaN(resultado11)).toBe(true);

  const resultado12 = calculadora.somar([], numeroQualquer);
  expect(isNaN(resultado12)).toBe(true);

  const resultado13 = calculadora.somar(numeroQualquer, () => {});
  expect(isNaN(resultado13)).toBe(true);

  const resultado14 = calculadora.somar(() => {}, numeroQualquer);
  expect(isNaN(resultado14)).toBe(true);

  const resultado15 = calculadora.somar(numeroQualquer, Symbol());
  expect(isNaN(resultado15)).toBe(true);

  const resultado16 = calculadora.somar(Symbol(), numeroQualquer);
  expect(isNaN(resultado16)).toBe(true);

  const resultado17 = calculadora.somar(numeroQualquer, new Date());
  expect(isNaN(resultado17)).toBe(true);

  const resultado18 = calculadora.somar(new Date(), numeroQualquer);
  expect(isNaN(resultado18)).toBe(true);

  const resultado19 = calculadora.somar(numeroQualquer, NaN);
  expect(isNaN(resultado19)).toBe(true);

  const resultado20 = calculadora.somar(NaN, numeroQualquer);
  expect(isNaN(resultado20)).toBe(true);
});

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function gerarNumero(parOuImpar) {
  if (parOuImpar === "par") {
    return gerarNumeroAleatorio() * 2;
  }
  return gerarNumeroAleatorio() * 2 + 1;
}
