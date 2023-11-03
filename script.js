'use strict';

const checkBTN = document.querySelector('.check');
const againBTN = document.querySelector('.again');
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

checkBTN.addEventListener('click', () => {
  let guess = +document.querySelector('.guess').value;
  if (!guess) {
    displayMessage('No number...');
  } else if (number !== guess) {
    displayMessage(guess > number ? 'Too high' : 'Too low');
    score--;
    document.querySelector('.score').textContent = score;
  } else if (number === guess) {
    displayMessage('Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = score;
  }
  if (score < 1) {
    document.querySelector('body').style.backgroundColor = 'red';
    displayMessage('You lost the game :(');
    document.querySelector('.score').textContent = 0;
  }
});

againBTN.addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  highscore = highscore > score ? highscore : score;
  document.querySelector('.highscore').textContent = highscore;
  score = 20;
  document.querySelector('.score').textContent = score;
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  if (highscore === 20) {
    highscore = 0;
    document.querySelector('.highscore').textContent = highscore;
  }
});
