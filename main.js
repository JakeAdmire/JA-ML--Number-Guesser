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
var chall1Scorecard = document.querySelector('.chall1-scorecard');
var chall2Scorecard = document.querySelector('.chall2-scorecard');
var cardWinner = document.querySelector('.card-winner');
var randomNumber = randomNumberGenerator(1, 100);

console.log(randomNumber);

function defaultRange(){
	parseInt(minRange.value) = 1;
	parseInt(maxRange.value) = 100;
}

function randomNumberGenerator(min, max) {
	return Math.ceil(Math.random() * (max - min) + min);
}

function customNumberGenerator() {
	return Math.floor(Math.random() * maxRange.value) + parseInt(minRange.value);
}

updateButton.addEventListener('click', updateRanges);

function updateRanges(){
	updateMinRange();
	updateMaxRange();
	randomNumber = customNumberGenerator();
	console.log("custom number", randomNumber);
}

function updateMinRange(){
	if (minRange.value === ''){
		rangeStart.innerText = 1;
	} else {
		rangeStart.innerText = minRange.value;
	}
}

function updateMaxRange(){
	if (maxRange.value === ''){
		rangeEnd.innerText = 100;
	} else {
		rangeEnd.innerText = maxRange.value;
	}
}

submitButton.addEventListener('click', functionCaller);

function functionCaller(event){
	event.preventDefault();
	updateFirstName();
	updateFirstGuess();
	updateSecondName();
	updateSecondGuess();
	playerOneWins();
	playerTwoWins();
}

function updateFirstName(){
	if (name1.value === ''){
		document.getElementById("name1").classList.add("error");
		document.getElementById("name-input1").classList.add("error-border");
	} else {
		scoreName1.innerText = name1.value;
		document.getElementById("name1").classList.remove("error");
		document.getElementById("name-input1").classList.remove("error-border");
	}
}

function updateFirstGuess(){
	if (guess1.value === ''){
		document.getElementById("guess1").classList.add("error");
		document.getElementById("guess1-not-valid").classList.remove("error");
		document.getElementById("guess-input1").classList.add("error-border");
	} else if (parseInt(guess1.value) < parseInt(minRange.value) || parseInt(guess1.value) > parseInt(maxRange.value)){
		document.getElementById("guess1-not-valid").classList.add("error");
		document.getElementById("guess1").classList.remove("error");
		document.getElementById("guess-input1").classList.add("error-border");
	} else {
		guessResult1.innerText = guess1.value;
		document.getElementById("guess1").classList.remove("error");
		document.getElementById("guess1-not-valid").classList.remove("error");
		document.getElementById("guess-input1").classList.remove("error-border");
	}
}

function updateSecondName(){
	if (name2.value === ''){
		document.getElementById("name2").classList.add("error");
		document.getElementById("name-input2").classList.add("error-border");
	} else {
		scoreName2.innerText = name2.value;
		document.getElementById("name2").classList.remove("error");
		document.getElementById("name-input2").classList.remove("error-border");
	}
}

function updateSecondGuess(){
	if (guess2.value === ''){
		document.getElementById("guess2").classList.add("error");
		document.getElementById("guess2-not-valid").classList.remove("error");
		document.getElementById("guess-input2").classList.add("error-border");
	} else if (parseInt(guess2.value) < parseInt(minRange.value) || parseInt(guess2.value) > parseInt(maxRange.value)){
		document.getElementById("guess2-not-valid").classList.add("error");
		document.getElementById("guess2").classList.remove("error");
		document.getElementById("guess-input2").classList.add("error-border");
	} else {
		guessResult2.innerText = guess2.value;
		document.getElementById("guess2").classList.remove("error");
		document.getElementById("guess2-not-valid").classList.remove("error");
		document.getElementById("guess-input2").classList.remove("error-border");
	}
}

function playerOneWins(){
	if (parseInt(guessResult1.innerText) < randomNumber){
		guessMessage1.innerText = "That's too low!";
	} else if (parseInt(guessResult1.innerText) > randomNumber){
		guessMessage1.innerText = "That's too high!";
	} else {
		guessMessage1.innerText = "BOOM!";
		scorecardOne();
	}
}

function playerTwoWins(){
	if (parseInt(guessResult2.innerText) < randomNumber){
		guessMessage2.innerText = "That's too low!";
	} else if (parseInt(guessResult2.innerText) > randomNumber){
		guessMessage2.innerText = "That's too high!";
	} else {
		guessMessage2.innerText = "BOOM!";
		scorecardTwo();
	}
}

function scorecardOne(){
	chall1Scorecard.innerText = name1.value;
	chall2Scorecard.innerText = name2.value;
	cardWinner.innerText = name1.value;
}

function scorecardTwo(){
	chall1Scorecard.innerText = name1.value;
	chall2Scorecard.innerText = name2.value;
	cardWinner.innerText = name2.value;
}

function clearDisable(event) {
	var enableResetButton = document.querySelector('.reset-game');
	var enableClearButton = document.querySelector('.clear-game');
	if (event.target.value != '') {
    enableResetButton.disabled = false;
    enableClearButton.disabled = false;
	}
}