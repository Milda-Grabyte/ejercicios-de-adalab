"use strict"

const adalaber1 = {
  name : "Susana",
  age: 34,
  occupation : "periodista"
}

adalaber1.run = () => "Estoy corriendo";
console.log(adalaber1.run());

adalaber1.distance = {};
adalaber1.distance.runAMarathon = function(distance) { 
  let phrase;
  if (typeof distance === "number") {
  phrase = `Estoy corriendo un maratón de ${distance} kilómetros`;
  } else {
  console.error('OJOCUIDAO');
  }
  return phrase;
}
console.log(adalaber1.distance.runAMarathon(50));
