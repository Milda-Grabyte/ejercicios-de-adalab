"use strict";

const button = document.querySelector('.button');
const input = document.querySelector(".input");

function sayHello() {
  const name = input.value;
  console.log(`Hola ${name}`)
}
button.addEventListener('click', sayHello);
