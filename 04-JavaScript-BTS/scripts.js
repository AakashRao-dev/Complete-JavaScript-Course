'use strict';

// =================== SCOPING IN PRACTICE ===================
/*
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1961 && birthYear <= 1996) {
      var millenial = true;

      // Creating new variable with the same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scopes variable
      output = 'NEW OUTPUT!';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function addTwoValues(a, b) {
        return a + b;
      }
    }
    // console.log(addTwoValues(2, 3));
    console.log(millenial);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Rajlaxmi';
console.log(calcAge(1975));
*/

// ============================================================
// ================ HOISTING & TDZ IN PRACTICE ================

/*
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Aakash';
let job = 'Frontend Developer';
const year = 2003;

// FUNCTIONS
// console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
*/

// ========================================================
// =================== THE THIS KEYWORD ===================

/*
// global scope = window object
console.log(this);

// Func Decl = window only in strict mode
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(2003);

// Arrow Func = parent this
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(2003);

// Object gives object
const jonas = {
  year: 2003,
  calcAge() {
    console.log(this);
    console.log(2024 - this.year);
  },
};
jonas.calcAge();

// Method borrowing
const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

// ======================================================
// ========= REGULAR FUNCTION VS ARROW FUNCTION =========

/*
const aakash = {
  firstName: 'Aakash',
  year: 2003,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // PRE_ES6 SOLUTION
    const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
      // not gonna work as expected
    };
    isMillenial();

    // ARROW FUNCTION SOLUTION
    const isGenz = () => {
      console.log(this);
      console.log(this.year >= 1990 && this.year <= 2010);
    };
    isGenz();
  },

  // Thumb rule for now: Never use arrow function as a method
  greet: () => {
    // console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
aakash.greet();
aakash.calcAge();

// ARGUMENTS KEYWORD - HOLLY SHIT!!
// YOU CAN USE ARGS WITHOUT EVEN THOUGH THEY ARE NOT THE EXACT PARAMETERS DEFINED
const addExpr = function (a, b) {
  const myArgs = arguments;
  let sumArgs = 0;
  for (let i = 0; i < arguments.length; i++) {
    sumArgs += arguments[i];
  }

  console.log(sumArgs);
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// ARROW FUNCTION DON'T HAVE ARGUMENTS KEYWORD
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 3);
*/
