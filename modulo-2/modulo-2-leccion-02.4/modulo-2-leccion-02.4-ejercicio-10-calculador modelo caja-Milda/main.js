"use strict"

function boxSizing(boxType, width, padding, borderSize) {
  let contentWidth;
  let boxWidth;

  if (boxType === "borderBox") {
    contentWidth = width - padding * 2 - borderSize * 2;
    boxWidth = width;
  } else {
    contentWidth = width;
    boxWidth = width + padding * 2 + borderSize * 2;
  }

  const result = `El ancho del contenido es: ${contentWidth}px y el ancho total de la caja es: ${boxWidth}px`;

  console.log(result);

  return result;
}

boxSizing("borderBox", 30, 5, 2);
