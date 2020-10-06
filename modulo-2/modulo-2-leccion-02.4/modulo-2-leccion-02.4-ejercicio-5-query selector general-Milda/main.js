"use strict"

function getEl(selector) {
  const result = document.querySelector(selector);
  return result;
} 
  
const btnEl = getEl(".btn");
btnEl.classList.add("added");   // Añade la clase .added

const navEl = getEl(".nav");
navEl.innerHTML = navEl.innerHTML + " del mundo" ;  // Añade el texto

const hiddenEl = getEl(".hidden");
hiddenEl.classList.replace("hidden", "display");    
// Reemplaza la clase .hidden por .display


