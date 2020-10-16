"use strict"

const canvas = document.querySelector(".colorful");

function changeColor() {

  function replaceClass(oldClass, newClass) {
    canvas.classList.remove(oldClass);
    canvas.classList.add(newClass);
  }

  if (window.scrollY < 250) {
    canvas.classList.add("aqua");
  } else {
   replaceClass('aqua','greenish');
  }
}

window.addEventListener("scroll", changeColor);