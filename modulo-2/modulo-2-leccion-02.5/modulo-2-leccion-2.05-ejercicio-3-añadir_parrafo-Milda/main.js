"use strict";

const text = document.querySelector(".paragraph");

// function appendText() {
//   const addText = text.innerHTML;
//   text.appendChild(addText);
// }

// function appendText() {
//   const newText = document.createElement('paragraph-1');
//   newText.innerHTML += text.innerHTML;
// }

function appendText() {
  const newText = document.createElement('paragraph-1');
  newText.innerHTML = "Bacon ipsum dolor amet dolor venison sint, aute landjaeger spare ribs strip steak magna dolore ut. Consectetur et mollit nostrud. Irure ground round tongue jerky tail, duis ribeye aliqua t-bone aliquip buffalo cillum. Jerky sirloin cillum dolore mollit, pork in reprehenderit andouille dolore ut ut. Corned beef dolore ullamco shankle dolore.";
  text.appendChild(newText);
}

text.addEventListener("mouseover", appendText);