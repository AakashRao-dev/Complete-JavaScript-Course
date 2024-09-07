// LOGIC FLOW: Taking the user input and Process it

// Processing:
// comparing the input with secret number

// if input !== secret number, decrease the score

// if input === secret number, make the highscore = score
// disable the user input check button
// change the message on right section to - "Correct Guess!"
// unhide the secret number
// change the background to green

// ==================================================
'use strict';
const checkBtn = document.querySelector('.btn.check');
const againBtn = document.querySelector('.btn.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber); // remove this
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔ No Number!');
    console.log(guess);
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    // MANIPULATE CSS STYLES
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber); // remove this

  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
