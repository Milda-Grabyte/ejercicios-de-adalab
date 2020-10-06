"use strict"

// Cálculo precio + IVA

function price(number) {
  const priceBeforeVAT = number;
  const VAT = number * 0.21;
  const totalPrice = priceBeforeVAT + VAT;

  return totalPrice;
}

const totalPrice = price(40);
console.log(`El precio total es ${totalPrice}`);