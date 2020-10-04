// Ejercicio 1
'use strict';
document.querySelector('h1').innerHTML = 'Hola';

// Ejercicio 3
const titleClass = document.querySelector('h1');
titleClass.classList.add('title');

const titleElement = document.querySelector('.title');
titleElement.innerHTML = titleElement.innerHTML + ' mundo';

// Ejercicio 4
const titleElement1 = document.querySelector('.title--1');
titleElement.innerHTML = 'La Adalaber seleccionada es: ';

const listClass = document.querySelector('ul');
listClass.classList.add('list');

const listElement = document.querySelector('.list');
const content = '<li class="item--1">Leire</li><li class="item--2">Milda</li>';
listElement.innerHTML = content;

const listElementClass = document.querySelector('.item--1');
titleElement1.innerHTML = titleElement1.innerHTML + listElementClass.innerHTML;