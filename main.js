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

// When 'submit guess' is clicked
  // the <h5> 'Challenger 1 Name' will equal the variable 'name1', 

  // the <h5> 'Challenger 2 Name' will equal the variable 'name2',

  // the <h1> class '.latest-guess-1' will equal the variable 'guess1',

  // the <h1> class '.latest-guess-2' will equal the variable 'guess2',

  //  if 'guess1' is < randomNumber, the variable 'guessResult1' will equal 'thats too low',
    //  elseif 'guess1' is > randomNumber, the variable 'guessResult1' will equal 'thats too high',
      // else, the variable 'guessResult1' will equal 'BOOM!' 
      // and set chall1won to true

  //  if 'guess2' is < randomNumber, the variable 'guessResult2' will equal 'thats too low',
    //  elseif 'guess2' is > randomNumber, the variable 'guessResult2' will equal 'thats too high',
      // else, the variable 'guessResult2' will equal 'BOOM!'
      // and set chall2won to true

  //  if chall1won and chall2won are both true, create tie html scorecard
    // elseif chall1won is true, create chall1won html scorecard
      // elseif chall2won is true, create chall2won html scorecard

// When 'reset game' is clicked 

  // 
