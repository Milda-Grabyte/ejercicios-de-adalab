"use strict"

function getEl(selector) {
  const result = document.querySelector(selector);
  if (result === null) {
    console.log(`No existe ningún elemento con clase, id o tag llamado ${selector}`)
  } else {
    console.log(`El selector ${selector} es validísimo, igual que tú, reina`)
  }
  return result;
} 

function isEven(number) {
  return number % 2 === 0;
}

const numEl = getEl(".number");
const numberValue = numEl.innerHTML; // Accedemos al párrafo y recogemos su valor
const numberParsed = Number(numberValue);   // string --> número no necesariamene entero; puede devolver un NaN

if (isEven(numberParsed) === true) {
  console.log(`Este número es PAR: ${numberParsed}`);
} else {
  console.log(`Este número es IMPAR: ${numberParsed}`);
}


  




