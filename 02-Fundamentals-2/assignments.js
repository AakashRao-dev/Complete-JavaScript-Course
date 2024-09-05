// =================================================
// =================== FUNCTIONS ===================

/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}.`;
}

const malaysia = describeCountry('Malaysia', 33.4, 'Kuala Lumpur');
const singapore = describeCountry('Singapore', 5.92, 'Singapore');
const taiwan = describeCountry('Taiwan', 23.4, 'Taipei');

console.log(malaysia);
console.log(singapore);
console.log(taiwan);
*/

// ========================================================
// ========== FUNCTION DECLARATION VS EXPRESSION ==========

/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
}

const malaysiaPopPercent = percentageOfWorld1(33.4);
const chinaPopPercent = percentageOfWorld1(1441);
const taiwanPopPercent = percentageOfWorld1(23.4);

console.log(malaysiaPopPercent);
console.log(chinaPopPercent);
console.log(taiwanPopPercent);
*/

// =========================================================
// ==================== ARROW FUNCTIONS ====================

/*
const percentageOfWorld3 = population => (population / 7900) * 100;

const malaysiaPopPercent = percentageOfWorld3(33.4);
const chinaPopPercent = percentageOfWorld3(1441);
const taiwanPopPercent = percentageOfWorld3(23.4);

console.log(malaysiaPopPercent, chinaPopPercent, taiwanPopPercent);
*/

// =========================================================
// =========== FUNCTIONS CALLING OTHER FUNCTIONS ===========

/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const describePopulation = function (country, population) {
  const percentageOfWorld = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentageOfWorld} of the world.`;
};

console.log(describePopulation('India', 1450));
console.log(describePopulation('China', 1441));
console.log(describePopulation('USA', 333));
*/

// ======================================================
// =============== INTRODUCTION TO ARRAYS ===============

/*
const populations = [1450, 1441, 333, 23];
console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [
  percentageOfWorld1([populations[0]]),
  percentageOfWorld1([populations[1]]),
  percentageOfWorld1([populations[2]]),
  percentageOfWorld1([populations[3]]),
];

console.log(percentages);
*/

// =====================================================
// ================ BASIC ARRAY METHODS ================

/*
const neighbours = ['India', 'Pakistan', 'Bangladesh', 'Nepal'];

neighbours.push('Utopia');
neighbours.pop();

if (!neighbours.includes('Germany'))
  console.log('Probably not a central european country :D');

neighbours[neighbours.indexOf('Pakistan')] = 'Akhand Bharat';

console.log(neighbours);
*/

// =======================================================
// =============== INTRODUCTION TO OBJECTS ===============

/*
const myCountry = {
  country: 'Japan',
  capital: 'Tokyo',
  language: 'Japanese',
  population: 124,
  neighbours: [],
};
*/

// ==================================================
// ============ DOT vs. BRACKET NOTATION ============

/*
const myCountry = {
  country: 'Japan',
  capital: 'Tokyo',
  language: 'Japanese',
  population: 124,
  neighbours: [],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);
*/

// ==================================================
// ================= OBJECT METHODS =================

/*
const myCountry = {
  country: 'Japan',
  capital: 'Tokyo',
  language: 'Japanese',
  population: 124,
  neighbours: [],
};

myCountry.describe = function () {
  console.log(
    `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
  );
};

myCountry.describe();

myCountry.checkIsland = function () {
  this.isIsland = this.neighbours.length > 0 ? false : true;
};

myCountry.checkIsland();
console.log(myCountry);
*/
