"use strict";

debugger;

const adalabers = [
  {
    name: "María",
    age: 29,
    job: "diseñadora",
  },
  {
    name: "Lucía",
    age: 31,
    job: "ingeniera química",
  },
  {
    name: "Susana",
    age: 34,
    job: "periodista",
  },
  {
    name: "Rocío",
    age: 25,
    job: "actriz",
  },
  {
    name: "Inmaculada",
    age: 21,
    job: "diseñadora",
  },
];

function countAdalabers() {
console.log(`El número de adalabers es ${adalabers.length}`);
}

let total = 0;
let avg;

function averageAge() {
  for (let i = 0; i < adalabers.length; i++) {
    let age = parseInt(adalabers[i].age);
    total = total + age;
    avg = total / adalabers.length;
  }
  return avg;
}

console.log(`La edad media de las adalabers es ${averageAge(adalabers)}`);

function theYoungest() {
  let minAge;
  let ageArray = [];
  for (let i = 0; i < adalabers.length; i++) {
    let age = parseInt(adalabers[i].age);
    ageArray.push(age);
  }
  minAge = Math.min(...ageArray);
  return minAge;
}

console.log(`La edad mínima de las adalabers es ${theYoungest(adalabers)}`);

function countDesigners() {
  let count = 0;
  for (let i = 0; i < adalabers.length; i++) {
    if (adalabers[i].job === "diseñadora") {
      count += 1;
    }
  }
  return count;
}

console.log(`Hay ${countDesigners()} diseñadora/-s entre las adalabers`);

function countDesigners() {
  let count = 0;
  for (const adalaber of adalabers) {
    if (adalaber.job === "diseñadora") {
      count += 1;
    }
  }
  return count;
}

console.log(`Hay ${countDesigners()} diseñadora/-s entre las adalabers`);

