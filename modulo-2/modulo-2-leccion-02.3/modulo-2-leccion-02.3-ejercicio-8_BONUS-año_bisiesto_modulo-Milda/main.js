"use strict";

const currentYear = 2020;
const yearsSinceLeapYear = currentYear % 4;
const nextLeapYearIn3Years = currentYear + 3;
const nextLeapYearIn2Years = currentYear + 2;
const nextLeapYearIn1Year = currentYear + 1;


switch (yearsSinceLeapYear) {
  case 1 :
    console.log(`El próximo año bisiesto es el ${nextLeapYearIn3Years}`);
    break;
  case 2 :
    console.log(`El próximo año bisiesto es el ${nextLeapYearIn2Years}`);
    break;
  case 3 :
    console.log(`El próximo año bisiesto es el ${nextLeapYearIn1Year}`);
    break;
  default:
    console.log('Este año es un año bisiesto.');
}