"use strict";
/*ej 2
let counter = 0;
let temp;
const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector(".time");
  time.innerHTML = counter;
  console.log(time);
  if (counter > 13) {
    clearInterval(temp);
    time.innerHTML = counter;
  }
};
temp = setInterval(incrementAndShowCounter, 1000);
*/
/*ej 3
let counter = 0;
const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector(".time");
  console.log(time);
  if (counter < 60) {
    time.innerHTML = "Escrito hace " + counter + " segundos";
  } else {
    time.innerHTML = `Escrito hace ${counter / 60} minuto`;
  }
};
setInterval(incrementAndShowCounter, 1000);
*/
let counter = 0;
const btn = document.querySelector(".btn");
let temp;
const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector(".time");
  time.innerHTML = counter;
  console.log(time);
};
function stop() {
  clearInterval(temp);
}
temp = setInterval(incrementAndShowCounter, 1000);
btn.addEventListener("click", stop);


