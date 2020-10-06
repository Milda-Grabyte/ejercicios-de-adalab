"use strict"

// Multiplicación (ej. 1)

function multiply(a, b) {
  return a * b;
}

console.log(multiply(6, 8));  // Devuelve 48
console.log(multiply(34, 47));  // Devuelve 1598
console.log(multiply(2020, 666));  // Devuelve 1345320

// Media (ej. 2)

function mean(a, b, c, d) {
  return (a + b + c + d) / 4;
}

console.log(mean(6, 8, 40, 72));  // Devuelve 31.5
console.log(mean(-7, 2.65, 19, 200004));  // Devuelve 50004.6625
console.log(mean(-20, -4.5, 4.5, 20));  // Devuelve 0