"use strict"

const canvas = document.querySelector(".document");

function changeColor(event) {
  if (event.code == 'KeyR') {
    canvas.classList.add("red");
  } else if (event.code == 'KeyM') {
    canvas.classList.add("purple");
  }
}

window.addEventListener("keydown", changeColor());