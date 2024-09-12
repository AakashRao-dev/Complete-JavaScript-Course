'use strict';

// Selecting DOM Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentPlayer0El = document.getElementById('current--0');
const currentPlayer1El = document.getElementById('current--1');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice
btnRoll.addEventListener('click', function () {
  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice roll
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. If rolled dice === 1, switch player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    currentPlayer0El.textContent = currentScore; // TODO - CHANGE THIS
  } else {
    // Switch to next player
  }
});
