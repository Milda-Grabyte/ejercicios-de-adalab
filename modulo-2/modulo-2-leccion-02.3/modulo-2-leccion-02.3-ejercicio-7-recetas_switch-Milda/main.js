"use strict";

const ingredient = 'Pollo';
// const ingredient = 'Merluza';
// const ingredient = 'Espinacas';
// const ingredient = '';

switch (ingredient) {
  case 'Pollo':
    console.log('Filete con patatas');
    break;
  case 'Merluza':
    console.log('Merlucita en salsa verde');
    break;
  case 'Espinacas':
    console.log('Espinacas rehogadas');
    break;
  default:
    console.log('Nada en la nevera');
}