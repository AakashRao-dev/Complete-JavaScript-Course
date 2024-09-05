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

// =====================================================
// ================== INTRO TO ARRAYS ==================

/*
const friend1 = 'Amit';
const friend2 = 'Adarsh';
const friend3 = 'Ajay';

// Literal Syntax
const friends = ['Amit', 'Adarsh', 'Ajay'];
console.log(friends);

// Constructor Syntax
// const years = new Array(1973, 1975, 2003, 2008);

console.log(friends[0]);
console.log(friends.length);

friends[2] = 'Atharva';
console.log(friends);

const job = 'Frontend Developer';
const aakash = ['Aakash', 'Rao', 2024 - 2003, job, friends];
console.log(aakash);
console.log(aakash.length);

// Exercise
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
const years = [1973, 1975, 2003, 2008];

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

// =========================================================
// ================== BASIC ARRAY METHODS ==================

/*
const friends = ['Amit', 'Adarsh', 'Ajay'];

// Add elements - returns length of the new array
friends.push('Aditya');
friends.unshift('Anas');

// Remove elements - returns the removed element of the array
friends.pop();
friends.shift();

console.log(friends.indexOf('Bob'));
console.log(friends.includes('Amit'));

if (friends.includes('Amit')) {
  console.log('Yes, you have a friend called Amit!');
}

console.log(friends);
*/

// ========================================================
// =================== INTRO TO OBJECTS ===================

/*
const aakashArray = [
  'Aakash',
  'Rao',
  2024 - 2003,
  'Frontend Developer',
  ['Amit', 'Adarsh', 'Ajay'],
];
console.log(aakashArray);
// order of the values matters - bcz we access using order number

const aakash = {
  firstName: 'Aakash',
  lastName: 'Rao',
  age: 2024 - 2003,
  job: 'Frontend Developer',
  friends: ['Amit', 'Adarsh', 'Ajay'],
};
console.log(aakash);
// order of the values does not matter - bcz we access using property name
*/

// ====================================================
// ============= DOT vs. BRACKET NOTATION =============

/*
const aakash = {
  firstName: 'Aakash',
  lastName: 'Rao',
  age: 2024 - 2003,
  job: 'Frontend Developer',
  friends: ['Amit', 'Adarsh', 'Ajay'],
};
console.log(aakash);

// dot notation
console.log(aakash.lastName);

// bracket notation
console.log(aakash['lastName']);

const nameKey = 'Name';
console.log(aakash['first' + nameKey]);
console.log(aakash[`last${nameKey}`]);

const promptKey = prompt(
  'What do you want to know about Aakash? Choose between - firstName, lastName, age or friends'
);
console.log(
  aakash[promptKey] ? aakash[promptKey] : 'Wrong input :D Try again!!'
);

aakash.location = 'India';
aakash['twitter'] = '@aakash_codes';
console.log(aakash);

// CHALLENGE
// "Aakash has 3 friends, and his best friend is called Amit"

console.log(
  `${aakash.firstName} has ${aakash.friends.length} friends, and his best friend is called ${aakash.friends[0]}.`
);
*/

// ==================================================
// ================= OBJECT METHODS =================

// Any function that is attached to an object is called a method

/*
const aakash = {
  firstName: 'Aakash',
  lastName: 'Rao',
  birthYear: 2003,
  job: 'Frontend Developer',
  friends: ['Amit', 'Adarsh', 'Ajay'],
  hasDriversLicense: true,

  // calcAge: function () {
  //   return 2024 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
};

aakash.calcAge();

console.log(aakash.age);
console.log(aakash.age);
console.log(aakash.age);

console.log(aakash);

// CHALLENGE
aakash.getSummary = function () {
  return `${this.firstName} ${this.lastName} is a ${this.age} years old ${
    this.job
  }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
};

console.log(aakash.getSummary());
*/

// ===================================================
// ============= ITERATION: THE FOR LOOP =============

/*
console.log('Lifting weights repetion 1 🏋️');
console.log('Lifting weights repetion 2 🏋️');
console.log('Lifting weights repetion 3 🏋️');
console.log('Lifting weights repetion 4 🏋️');
console.log('Lifting weights repetion 5 🏋️');
console.log('Lifting weights repetion 6 🏋️');
console.log('Lifting weights repetion 7 🏋️');
console.log('Lifting weights repetion 8 🏋️');
console.log('Lifting weights repetion 9 🏋️');
console.log('Lifting weights repetion 10 🏋️');

console.log('======== FOR LOOP ========');

// (initialization; condition; afterthought;)
for (let i = 1; i < 11; i++) {
  console.log(`Lifting weights repetion ${i} 🏋️`);
}
*/

// =====================================================
// ======= LOOPING ARRAYS, BREAKING & CONTINUING =======

// BREAK & CONTINUE

// continue: (skip) exits the current iteration of the loop and continue to next one

// break: completly terminate the whole loop

/*
const aakashArray = [
  'Aakash',
  'Rao',
  2024 - 2003,
  'Frontend Developer',
  ['Amit', 'Adarsh', 'Ajay'],
];

const types = [];

for (let i = 0; i < aakashArray.length; i++) {
  // Reading from aakash array
  console.log(aakashArray[i], typeof aakashArray[i]);

  // Filling types array
  // types[i] = typeof aakashArray[i];
  types.push(typeof aakashArray[i]);
}

console.log(types);

const birthYears = [1973, 1975, 2003, 2008];
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
  ages.push(2024 - birthYears[i]);
}
console.log(ages);

console.log('======== CONTINUE ========');
for (let i = 0; i < aakashArray.length; i++) {
  if (typeof aakashArray[i] !== 'string') continue;
  console.log(aakashArray[i], typeof aakashArray[i]);
}

console.log('======== BREAK ========');
for (let i = 0; i < aakashArray.length; i++) {
  if (typeof aakashArray[i] === 'number') break;
  console.log(aakashArray[i], typeof aakashArray[i]);
}
*/

// ========================================================
// ========== LOOPING BACKWARDS & LOOPS IN LOPPS ==========

/*
const aakashArray = [
  'Aakash',
  'Rao',
  2024 - 2003,
  'Frontend Developer',
  ['Amit', 'Adarsh', 'Ajay'],
];

for (let i = aakashArray.length - 1; i >= 0; i--) {
  console.log(i, aakashArray[i]);
}

for (let i = 1; i < 4; i++) {
  console.log(`=========== STARTING EXERCISE ${i}`);
  for (let j = 1; j < 6; j++) {
    console.log(`Exercise ${i}: Lifting weights rep ${j} 🏋️`);
  }
}
*/

// ====================================================
// ================== THE WHILE LOOP ==================

/*
console.log('========= FOR LOOP =========');
for (let i = 1; i < 11; i++) {
  console.log(`Lifting weights repetion ${i} 🏋️`);
}

console.log('========= WHILE LOOP =========');
let i = 1;
while (i < 11) {
  console.log(`Lifting weights repetion ${i} 🏋️`);
  i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to End...');
}
*/
