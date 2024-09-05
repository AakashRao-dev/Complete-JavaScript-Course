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

const messageEl = document.querySelector('.message');
messageEl.textContent = "Let's Fucking GO!";
