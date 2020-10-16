"use strict";

const adalaber1 = {
  name : "Susana",
  age: 34,
  occupation : "periodista"
}

adalaber1.showBio = function(){
  return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.occupation}`;
}

console.log(adalaber1.showBio());

const adalaber2 = {
  name : "Rocío",
  age: 25,
  occupation : "actriz"
}

adalaber2.showBio = function(){
  return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.occupation}`;
}

console.log(adalaber2.showBio());

// const adaBio = function() {
//   return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.occupation}`;
// }
// adalaber1.showBio = adaBio;
// adalaber2.showBio = adaBio;

// console.log(adalaber1.showBio());
// console.log(adalaber2.showBio());