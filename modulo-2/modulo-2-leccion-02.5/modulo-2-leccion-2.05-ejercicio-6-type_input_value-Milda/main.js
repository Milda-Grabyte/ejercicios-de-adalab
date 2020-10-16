"use strict"

const input = document.querySelector(".input");
const text = document.querySelector(".text");
const pepito = document.querySelector(".pepito");

function printLetter(event) {
  text.innerHTML = event.currentTarget.value;
  pepito.innerHTML = event.key;
}

input.addEventListener("keyup", printLetter);

function mimimiTranslator(event) {
  if (event.key === "a" || event.key === "e" || event.key === "o" || event.key === "u") {
    text.innerHTML += "i";
  } else {
  text.innerHTML = event.currentTarget.value;
  }
}

input.addEventListener("keyup", mimimiTranslator);