"use strict"

const teacherIsra = document.querySelector(".teacher--isra");
const teacherTuerto = document.querySelector(".teacher--tuerto");
const teacherNasi = document.querySelector(".teacher--nasi");

function selectFavorite(event) {
  const selectedTeacher = event.currentTarget;
  selectedTeacher.classList.toggle("teacher--selected");
  selectedTeacher.innerHTML = "Quitar";
}

teacherIsra.addEventListener("click", selectFavorite);
teacherTuerto.addEventListener("click", selectFavorite);
teacherNasi.addEventListener("click", selectFavorite);