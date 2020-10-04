"use strict";

const avocadoPrice = 1.5;
const money = 49;

const avocados = (money >= avocadoPrice) ? (money / avocadoPrice) : 0;
console.log(`I can afford ${Math.floor(avocados)} avocados.`);

// let avocados;
// if (money >= avocadoPrice) {
//   avocados = money / avocadoPrice;
// } else {
//   avocados = 0;
// }

