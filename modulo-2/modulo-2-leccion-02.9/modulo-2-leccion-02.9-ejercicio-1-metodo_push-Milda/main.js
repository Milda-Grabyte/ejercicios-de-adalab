"use strict"

// Números de 1 a 100

function get100Numbers() {
  let numbers = [];
  for (let number = 1; number < 101; number++) {
    numbers.push(number);
  }
  return numbers;
}

console.log(get100Numbers());

function get100InverseNumbers() {
  let derps = [];
  for (let derp = 100; derp > 0; derp--) {
    derps.push(derp);
  }
  return derps;
}

console.log(get100InverseNumbers());