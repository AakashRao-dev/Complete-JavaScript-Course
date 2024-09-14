// 'use strict';

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
// ===========================================================
