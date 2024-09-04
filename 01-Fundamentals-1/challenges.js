// ================ CHALLENGE-1 ================

/*
// DATA 1:
// Mark weight = 78
// Mark height = 1.69
// John weight = 92
// John height = 1.95

// DATA 2:
// Mark weight = 95
// Mark height = 1.88
// John weight = 85
// John height = 1.76

const massMark = 95;
const heightMark = 1.88;
const BMIMark = (massMark / heightMark) * heightMark;

const massJohn = 85;
const heightJohn = 1.76;
const BMIJohn = (massJohn / heightJohn) * heightJohn;

console.log('BMI of Mark:', BMIMark);
console.log('BMI of John:', BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
*/

// =============================================
// ================ CHALLENGE-2 ================

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}
*/

// =============================================
// ================ CHALLENGE-3 ================

// Data:
// Dolphins = [96, 108, 89]
// Koalas = [88, 91, 110]

/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy');
} else if (scoreDolphins === scoreKoalas) {
  console.log('Both win the trophy');
} else {
  console.log('Koalas win the trophy');
}
*/

// =============================================
// ================ CHALLENGE-4 ================

// DATA:
// bill = 275, 40, 430

/*
const bill = 275;
const tip = bill > 50 && bill < 300 ? (bill * 15) / 100 : (bill * 20) / 100;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);
*/
