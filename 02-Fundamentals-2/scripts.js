'use strict';
// ===================================================
// =================== STRICT MODE ===================

/*
// helps with finding bugs on if-else block
// helps with avoid using reserved words

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 30;
*/

// =================================================
// =================== FUNCTIONS ===================

// Function:
// A piece of code that we can reuse over & over again in our code.
// It's like a variable but for whole chunks of code.
// Allows us to write more maintainable code by allowing to create resusable block of code - DRY

/*
function logger() {
  console.log('My name is Aakash');
}

// calling / invoking / running function
logger(23);
logger();
logger();

// parameters: only specific to functions
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges...`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// ==========================================================
// ========== FUNCTION DECLARATION VS. EXPRESSIONS ==========

// parameter: placeholder to recieve input values
// argument: actual value passed during calling the function

// difference: function declartions can be called before even they are declared due to "Hoisting"

/*
// FUNCTION DECLARATION
function calcAge1(birthYear) {
  return 2024 - birthYear;
}

const age1 = calcAge1(2003);
console.log(age1);

// FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(2008);
console.log(age2);
*/

// =========================================================
// ==================== ARROW FUNCTIONS ====================

/*
const calcAge3 = birthYear => 2024 - birthYear;

const age3 = calcAge3(2003);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  console.log(this);
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearUntilRetirement(2003, 'Aakash'));
console.log(yearUntilRetirement(2008, 'Aakash'));
*/

// =========================================================
// =========== FUNCTIONS CALLING OTHER FUNCTIONS ===========

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

// =====================================================
// ================ REVIEWING FUNCTIONS ================

// Function - revieve input data - transform data - output data

// Function Body - Block of code that we want to reuse. Processes the function's input data

// return - statement to output a value from the function & terminate execution

// Arguments - Actual value of function parameters, to input data

// 3 Different Function Types:

// 1. Declaration: can be used before it's declared
// 2. Expression: function value stored in a variable
// 2. Arrow: Great for one liner functions. Has no "this" keyword

/*
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }

  // return `${firstName} retires in ${retirement} years.`;
};

console.log(yearUntilRetirement(2003, 'Aakash'));
console.log(yearUntilRetirement(2008, 'Aishwarya'));
console.log(yearUntilRetirement(1940, 'Aishwarya'));
*/
