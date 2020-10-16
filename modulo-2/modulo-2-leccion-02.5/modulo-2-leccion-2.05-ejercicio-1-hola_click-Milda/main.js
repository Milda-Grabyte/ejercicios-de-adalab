"use strict";

const button = document.querySelector('.button');
const text = document.querySelector(".hello");

function showMessage() {
  text.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}
button.addEventListener('click', showMessage);
