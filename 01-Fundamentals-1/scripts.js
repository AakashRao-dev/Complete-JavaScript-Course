// let js = 'amazing';

// console.log(40 + 8 + 23 - 10);
// console.log('Jonas');
// console.log(23);

// ===============================================
// =============== BASIC OPERATORS ===============

/*
// ARITHMETIC OPERATORS

let x;
const currentYear = 2024;
const birthYear = 2003;

// Subtract
x = currentYear - birthYear;
// Multiplication
x = x * 2;
// Division
x = x / 2;
// Exponentation
x = x ** 2;

// Concatenation
const firstName = 'Aakash';
const lastName = 'Rao';
x = firstName + ' ' + lastName;

// Assignment
x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 2; // x = x * 2 = 50

// Increment
x++; // x = x + 1

// Decrement
x--; // x = x - 1

// Comparison
console.log(x > 40, 'Value ' + x + ' is greater than 40!'); // >, <, >=, <=, ==, ===, !=, !==

x = x !== '50';

console.log(x);
*/

// ===========================================================
// =============== STRINGS & TEMPLATE LITERALS ===============

/*
const firstName = 'Aakash';
const job = 'student';
const birthYear = 2003;
const currentYear = 2024;

const desc =
  "I'm " +
  firstName +
  ' a ' +
  (currentYear - birthYear) +
  ' years old ' +
  job +
  '!';
console.log(desc);

// TEMPLATE LITERAL
const descNew = `I'm ${firstName} a ${
  currentYear - birthYear
} years old ${job}!`;
console.log(descNew);

console.log(`Just a regular string...`);
console.log(`
---> This is a
     multi 
     line string <---
`);

console.log('---> String with \nmultiple \nlines <---');
*/

// ==========================================================
// =================== IF/ELSE STATEMENTS ===================

/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`You can go for having driving license :)`);
} else {
  console.log(`You cannot drive, please wait for ${18 - age} more years :-`);
}

// if-else statment/(control structure)
const birthYear = 2003;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// ================================================================
// =================== TYPE CONVERSION/COERCION ===================

/*
// Type conversion: explicitly converting types
const inputYear = '1991';

let x;

// Different ways of converting String to Number
x = Number(inputYear) + 1;
x = +inputYear + 1;
x = parseInt(inputYear) + 1;

// NaN - invalid number
x = Number('Aakash');

// Converting to String
x = String(786);
x = 900 + '';

console.log(x, typeof x);

// Type Coercion - Happens automatically behind the scenes
console.log("I'm " + 21 + ' years old!');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

// GUESS THE OUTPUT
let n = '1' + 1;
n = n - 1;

console.log(n);
*/

// =============================================================
// =================== TRUTHY & FALSY VALUES ===================

/*
// 5 falsy values
// 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Aakash'));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({}));

// Logical context, Logical Operators

const money = 100;
if (money) {
  console.log(`Don't spend it all ;)`);
} else {
  console.log(`You should get a job!`);
}

let height = 0;
if (height) {
  console.log(`Yay, height is defined!`);
} else {
  console.log(`Height is UNDEFINED :(`);
}
*/

// ======================================================================
// =================== EQUALITY OPERATORS: == vs. === ===================

// Loose Equality Operator: Performs type coercion

// 18 == '18'
// '18' (the string) will get converted to 18 (the number) and then perform a equality check

// CLEAN CODE: ALWAYS USE STRICT EQUALITY OPERATOR

/*
const age = '18';

if (age == 18) console.log('You just became an adult :D (LOOSE)');
if (age === 18) console.log('You just became an adult :D (STRICT)');

const favoriteNum = +prompt("What's your favorite number?");
console.log(favoriteNum, typeof favoriteNum);

if (favoriteNum === 23) {
  console.log('Cool, 23 is an amazing number!');
} else if (favoriteNum === 7) {
  console.log('7 is also a cool number');
} else {
  console.log(
    `Number is not 23 or 7! But ${favoriteNum} is also a great number :)`
  );
}

if (favoriteNum !== 23) console.log('Why not the 23?');
*/

// =========================================================
// =================== LOGICAL OPERATORS ===================

// AND, OR, NOT -> &&, ||, !

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

// ============================================================
// =================== THE SWITCH STATEMENT ===================

/*
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan week structure');
    console.log('Design & Build');
    break;
  case 'tuesday':
    console.log('Start working on the Project');
    console.log('Contribute to Open Source');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Work on Heavy');
    console.log('Open Source Contribution');
    break;
  case 'friday':
    console.log('Write a blog');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Learn & Explore Something new');
    console.log('Build a heavy project!');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan week structure');
  console.log('Design & Build');
} else if (day === 'tuesday') {
  console.log('Start working on the Project');
  console.log('Contribute to Open Source');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Work on Heavy');
  console.log('Open Source Contribution');
} else if (day === 'friday') {
  console.log('Write a blog');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Learn & Explore Something new');
  console.log('Build a heavy project!');
} else {
  console.log('Not a valid day!');
}
*/

// ================================================================
// =================== STATEMENTS & EXPRESSIONS ===================

// Expression: A piece of code that produces a value
// Statement: A bigger piece of code that is executed and which does not produce a value itself

/*
if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Aakash';
console.log(`I'm ${2024 - 2003} years old ${me}.`);
*/

// ======================================================================
// =================== CONDITIONAL (TERNARY OPERATOR) ===================

// condition ? expression if true : expression if false;

/*
const age = 21;

// age >= 18
//   ? console.log('I like to drink wine 🍷')
//   : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/
