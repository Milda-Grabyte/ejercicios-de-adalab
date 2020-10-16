"use strict"

const lostNumbers = [4, 8, 15, 16, 23, 42];

let evenNumbers = [];
let multiplesOf3 = [];


function bestLostNumber() {
  for (let number of lostNumbers) {
    if (parseInt(number) % 2 == 0 && parseInt(number) % 3 == 0) {
      evenNumbers.push(number);
      multiplesOf3.push(number);
    }
    else if (parseInt(number) % 2 == 0) {
      evenNumbers.push(number);
    } else if (parseInt(number) % 3 == 0) {
      multiplesOf3.push(number);
    }
  }
  console.log(evenNumbers);
  console.log(multiplesOf3);
  result = evenNumbers.concat(multiplesOf3);
  return result;
}

console.log(bestLostNumber());


// La siguiente función es diferente, porque el número 42 es un múltiplo común de 2 y de 3 pero no pasa a segunda condición y no se incluye también en el array multiplesOf3.

const lostNumbers = [4, 8, 15, 16, 23, 42];

let evenNumbers = [];
let multiplesOf3 = [];


function bestLostNumber() {
  for (let number of lostNumbers) {
    if (parseInt(number) % 2 == 0) {
      evenNumbers.push(number);
    } else if (parseInt(number) % 3 == 0) {
      multiplesOf3.push(number);
    }
  }
  console.log(evenNumbers);
  console.log(multiplesOf3);
  result = evenNumbers.concat(multiplesOf3);
  return result;
}

console.log(bestLostNumber());