// ================ VALUES & VARIABLES ================

/*
const country = 'India';
const continent = 'Asia';
const population = 1441;

console.log(country);
console.log(continent);
console.log(population);

console.log(
  country +
    ' is a part of ' +
    continent +
    " and it's population is " +
    population +
    ' million.'
);
*/

// ============================================
// ================ DATA TYPES ================

/*
const country = 'India';
const continent = 'Asia';
const population = 1441;

const isIsland = false;
let language;

console.log(country, typeof country);
console.log(continent, typeof continent);
console.log(population, typeof population);
console.log(isIsland, typeof isIsland);
console.log(language, typeof language);
*/

// ==================================================
// ================ LET, CONST & VAR ================

/*
const country = 'India';
const continent = 'Asia';
let population = 1441;

const isIsland = false;

let language;
language = 'Hindi';
*/

// =================================================
// ================ BASIC OPERATORS ================

/*
const country = 'India';
const continent = 'Asia';
let population = 1441;

const isIsland = false;

let language;
language = 'Hindi';

const halfPopulation = population / 2;
population++;

console.log('Population of ' + country + ':', population);
console.log('Half Population of ' + country + ':', halfPopulation);
console.log('Is Population of ' + country + ' > Finland:', population > 6);
console.log('Does India have population less than average:', population < 33);

const description =
  country +
  ' is in ' +
  continent +
  ", and it's " +
  population +
  ' million people speak ' +
  language +
  '.';

console.log(description);
*/

// =============================================================
// ================ STRINGS & TEMPLATE LITERALS ================

/*
const country = 'India';
const continent = 'Asia';
let population = 1441;

const isIsland = false;

let language;
language = 'Hindi';

const description = `${country} is in ${continent} and it's ${population} million people speak ${language}.`;
console.log(description);
*/

// =============================================================
// ============ TAKING DECISIONS: IF/ELSE STATMENTS ============

/*
const country = 'India';
const continent = 'Asia';
let population = 1441;

const isIsland = false;

let language;
language = 'Hindi';

if (population > 33) {
  console.log(`${country}'s population is above average!`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average!`
  );
}
*/

// ==================================================
// ============ TYPE CONVERSION/COERCION ============

/*
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
*/

// ========================================================
// ============ EQUALITY OPERATORS: == vs. === ============

/*
const numNeighbours = +prompt(
  'How many neighbour countries does your country have?'
);

if (numNeighbours === 1) {
  console.log('Only 1 Border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 Border');
} else {
  console.log('No Borders');
}
*/

// =======================================================
// ================== LOGICAL OPERATORS ==================

/*
const country = 'India';
const continent = 'Asia';
let population = 1441;

const isIsland = false;
const language = 'Hindi';

if (language === 'English' && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
*/

// ==========================================================
// ================== THE SWITCH STATEMENT ==================

/*
const language = 'Hindi';

switch (language) {
  case 'Chinese':
  case 'Mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'Spanish':
    console.log('2nd number in place of native speakers');
    break;
  case 'English':
    console.log('3rd place');
    break;
  case 'Hindi':
    console.log('Number 4');
    break;
  case 'Arabic':
    console.log("5'th most spoken language");
    break;
  default:
    console.log('Great language too :D');
}
*/
