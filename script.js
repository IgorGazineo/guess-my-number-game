'use strict';

const checkBTN = document.querySelector('.check');
const againBTN = document.querySelector('.again');
let number = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

checkBTN.addEventListener('click', () => {
  let guess = +document.querySelector('.guess').value;
  console.log(number, guess);
  if (number !== guess) {
    displayMessage(guess > number ? 'Too high' : 'Too low');
  }
});
