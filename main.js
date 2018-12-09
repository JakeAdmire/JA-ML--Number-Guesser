function randomNumberGenerator() {
  return Math.floor(Math.random() * 101);
}

var minRange = document.querySelector('.min-range-input');
var maxRange = document.querySelector('.max-range-input');
var updateButton = document.querySelector('.update-button');
var rangeStart = document.querySelector('.range-start');
var rangeEnd = document.querySelector('.range-end');
var name1 = document.querySelector('.name1');
var name2 = document.querySelector('.name2');
var guess1 = document.querySelector('.guess1');
var guess2 = document.querySelector('.guess2');
var submitButton = document.querySelector('.submit-guess');
var scoreName1 = document.querySelector('.score-name1');
var scoreName2 = document.querySelector('.score-name2');
var guessResult1 = document.querySelector('.guess-result1');
var guessResult2 = document.querySelector('.guess-result2');
var randomNumber = randomNumberGenerator();



updateButton.addEventListener('click', updateRange);
submitButton.addEventListener('click', submitGuess);


function updateRange() {
  rangeStart.innerText = minRange.value;
  rangeEnd.innerText = maxRange.value;
}

function submitGuess(event) {
  event.preventDefault();
  console.log('submit guess')
}
