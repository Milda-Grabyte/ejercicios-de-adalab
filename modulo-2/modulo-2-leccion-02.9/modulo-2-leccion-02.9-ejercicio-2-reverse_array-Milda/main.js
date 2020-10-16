"use strict"

// Números inversos usando la función get100Numbers() y reverse()

function getReversed100Numbers() {
  function get100Numbers() {
    let numbers = [];
    for (let number = 1; number < 101; number++) {
      numbers.push(number);
    }
    return numbers;
  }
  let reversedNumbers = get100Numbers().reverse();
  return reversedNumbers;
}

console.log(getReversed100Numbers());
