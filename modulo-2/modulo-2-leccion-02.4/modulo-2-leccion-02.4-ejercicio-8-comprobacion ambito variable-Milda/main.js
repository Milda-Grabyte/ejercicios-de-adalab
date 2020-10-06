
// modificamos una variable de ámbito global
// let secretLetter = 'y';
// function mySecretLetter() {
//   secretLetter = 'x';
//   return secretLetter;
// }
// console.log(mySecretLetter()); // devuelve "x"
// console.log(secretLetter); // devuelve "x"

// Cambiamos el orden de los console.log

let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}

console.log(secretLetter);  // devuelve "y"
console.log(mySecretLetter());  // devuelve "x"

// No devuelve dos veces "x" porque la función que cambia el valor de la variable secretLetter se invoca después de llamar a dicha variable (es decir, el valor de la variable se mantiene el que ha sido declarado hasta llamar la función).