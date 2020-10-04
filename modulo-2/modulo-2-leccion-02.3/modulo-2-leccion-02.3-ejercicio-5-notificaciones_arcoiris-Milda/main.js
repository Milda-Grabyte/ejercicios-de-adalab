"use strict";

const notification = document.querySelector(".notification");

if (notification.classList.contains("warning")) {
  notification.innerHTML = "Aviso";
  document.querySelector('.text').innerHTML = 'Tenga cuidado';
} else if (notification.classList.contains("error")) {
  notification.innerHTML = "Error";
  document.querySelector('.text').innerHTML = 'Ha surgido un error';
} else {
  notification.innerHTML = "Correcto";
  document.querySelector('.text').innerHTML = 'Los datos son correctos';
}
