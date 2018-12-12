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
var guessMessage1 = document.querySelector('.guess-message1');
var guessMessage2 = document.querySelector('.guess-message2');
var randomNumber = randomNumberGenerator(1, 100)


updateButton.addEventListener('click', updateRange);
submitButton.addEventListener('click', functionCaller);

function randomNumberGenerator(min, max) {

	return Math.ceil(Math.random() * (max - min) + min);
}
function customNumberGenerator() {
	return Math.floor(Math.random() * maxRange.value) + parseInt(minRange.value);
}
console.log(randomNumber);
function updateRange() {
	rangeStart.innerText = minRange.value;
	rangeEnd.innerText = maxRange.value;
	randomNumber = customNumberGenerator();
	console.log("custom number", randomNumber)
}

function submitGuess() {
	scoreName1.innerText = name1.value;
	scoreName2.innerText = name2.value;
	guessResult1.innerText = guess1.value;
	guessResult2.innerText = guess2.value;
}

//when the submit button is pressed
//take the guess value and compare to generated number
//use parseInt
//message needs to populate with new message
//guess-message1 and guess-message2 - update innerText

function compareGuess() {
	console.log(guess1.value);
	if (guess1.value > parseInt(randomNumber)) {
		guessMessage1.innerText = "Your Guess is Too High";
	} else if (guess1.value < parseInt(randomNumber)) {
		guessMessage1.innerText = "Your Guess is Too Low";
	} else {
		guessMessage1.innerText =
	 "BOOM!!!";
	}
}

function compareGuess2() {
	console.log(guess2.value);
	if (guess2.value > parseInt(randomNumber)) {
		guessMessage2.innerText = "Your Guess is Too High";
	} else if (guess2.value < parseInt(randomNumber)) {
		guessMessage2.innerText = "Your Guess is Too Low";
	} else {
		guessMessage2.innerText =
	 "BOOM!!!";
	}
}

function functionCaller(event) {
	event.preventDefault();
	submitGuess();
	compareGuess();
	compareGuess2();
}