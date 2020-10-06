"use strict"

function getEl(selector) {
  const result = document.querySelector(selector);
  if (result === null) {
    console.log(`No existe ningún elemento con clase, id o tag llamado ${selector}`)
  } else {
    console.log(`El selector ${selector} es validísimo, igual que tú, reina`)
  }
  return result;
} 
  
const navEl = getEl(".nav");
navEl.innerHTML = navEl.innerHTML + " del mundo";  // Añade el texto



