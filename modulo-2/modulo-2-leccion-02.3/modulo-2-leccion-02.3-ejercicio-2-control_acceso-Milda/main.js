"use strict";

const registeredUser1 = "Milda";
const registeredUser2 = "Leire";
const user = "Leire";

if ((user === registeredUser1) || (user === registeredUser2)) {
  console.log('Bienvenida, ' + user + '!'); //Esta línea se ejecuta solo si se cumple la condición
} else {
  console.log('Lo siento pero el usuario que has introducido no está registrado.'); //Esta línea se ejecuta solo si NO se cumple la condición
}