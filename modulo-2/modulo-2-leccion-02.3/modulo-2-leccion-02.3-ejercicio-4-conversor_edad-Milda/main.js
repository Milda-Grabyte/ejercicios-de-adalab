"use strict";

const dogAge = 3;
const ageYear1 = 15;
const ageYear2 = 9;
const ageYear3Plus = 5;

if (dogAge === 1) {
  console.log('El perro tiene ' + ageYear1 + ' años humanos');
} else if (dogAge === 2) {
  console.log(`El perro tiene ${ageYear1 + ageYear2} años humanos.`);
} else {
  console.log(`El perro tiene ${ageYear1 + ageYear2 + ((dogAge - 2) * ageYear3Plus)} años humanos.`);
}