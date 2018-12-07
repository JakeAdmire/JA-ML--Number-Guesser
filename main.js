var minRange = document.querySelector('.min-range-input');
var maxRange = document.querySelector('.max-range-input');
var updateButton = document.querySelector('.update-button');
var rangeStart = document.querySelector('.range-start');
var rangeEnd = document.querySelector('.range-end');

updateButton.addEventListener('click', function() {
   rangeStart.innerHTML = minRange.value;
   rangeEnd.innerHTML = maxRange.value;
 });

var name1 = document.querySelector('.name1').value;
var name2 = document.querySelector('.name2').value;
var guess1 = document.querySelector('.guess1');
var guess2 = document.querySelector('.guess2');
var submitButton = document.querySelector('.submit-guess');
var scoreName1 = document.querySelector('.score-name1');
var scoreName2 = document.querySelector('.score-name2');
var guessResult1 = document.querySelector('.guess-result1');
var guessResult2 = document.querySelector('.guess-result2');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  console.log();

})
