// "use strict";

// const currentYear = 2020;
// const yearsSinceLeapYear = currentYear % 4;
// const nextLeapYearIn3Years = currentYear + 3;
// const nextLeapYearIn2Years = currentYear + 2;
// const nextLeapYearIn1Year = currentYear + 1;


// switch (yearsSinceLeapYear) {
//   case 1 :
//     console.log(`El próximo año bisiesto es el ${nextLeapYearIn3Years}`);
//     break;
//   case 2 :
//     console.log(`El próximo año bisiesto es el ${nextLeapYearIn2Years}`);
//     break;
//   case 3 :
//     console.log(`El próximo año bisiesto es el ${nextLeapYearIn1Year}`);
//     break;
//   default:
//     console.log('Este año es un año bisiesto.');
// }

"use strict";

const currentYear = 21;
const yearsSinceLeapYear = currentYear % 4;
let nextLeapYear = "";

switch (yearsSinceLeapYear) {
  case 1:
    nextLeapYear = currentYear + 3;
    console.log(`El próximo año bisiesto es el ${nextLeapYear}`);
    break;
  case 2:
    nextLeapYear = currentYear + 2;
    console.log(`El próximo año bisiesto es el ${nextLeapYear}`);
    break;
  case 3:
    nextLeapYear = currentYear + 1;
    console.log(`El próximo año bisiesto es el ${nextLeapYear}`);
    break;
  default:
    console.log('Este año es un año bisiesto.');
}