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
// var guessMessage1 = document.querySelector('.guess-message1');
// var guessMessage2 = document.querySelector('.guess-message2');
// var randomNumber = randomNumberGenerator(1, 100)


// updateButton.addEventListener('click', updateRange);
// submitButton.addEventListener('click', functionCaller);

// function randomNumberGenerator(min, max) {

// 	return Math.ceil(Math.random() * (max - min) + min);
// }
// function customNumberGenerator() {
// 	return Math.floor(Math.random() * maxRange.value) + parseInt(minRange.value);
// }
// console.log(randomNumber);
// function updateRange() {
// 	rangeStart.innerText = minRange.value;
// 	rangeEnd.innerText = maxRange.value;
// 	randomNumber = customNumberGenerator();
// 	console.log("custom number", randomNumber)
// }

// function submitGuess() {
// 	scoreName1.innerText = name1.value;
// 	scoreName2.innerText = name2.value;
// 	guessResult1.innerText = guess1.value;
// 	guessResult2.innerText = guess2.value;
// }


// function compareGuess() {
// 	console.log(guess1.value);
// 	if (guess1.value > parseInt(randomNumber)) {
// 		guessMessage1.innerText = "Your Guess is Too High";
// 	} else if (guess1.value < parseInt(randomNumber)) {
// 		guessMessage1.innerText = "Your Guess is Too Low";
// 	} else {
// 		guessMessage1.innerText =
// 	 "BOOM!!!";
// 	}
// }

// function compareGuess2() {
// 	console.log(guess2.value);
// 	if (guess2.value > parseInt(randomNumber)) {
// 		guessMessage2.innerText = "Your Guess is Too High";
// 	} else if (guess2.value < parseInt(randomNumber)) {
// 		guessMessage2.innerText = "Your Guess is Too Low";
// 	} else {
// 		guessMessage2.innerText =
// 	 "BOOM!!!";
// 	}
// }

// function functionCaller(event) {
// 	event.preventDefault();
// 	submitGuess();
// 	compareGuess();
// 	compareGuess2();
// }


// When .update-button is pressed 
updateButton.addEventListener('click', updateRanges);

function updateRanges(){
	updateMinRange();
	updateMaxRange();
}
//   if .min-range-input = ""
//     range-start = 1
//   else .range-start = .min-range-input
function updateMinRange(){
	if (minRange.value === ''){
		rangeStart.innerText = 1;
	} else {
		rangeStart.innerText = minRange.value;
	}
}
//   if .max-range-input = ""
//     range-end = 100
function updateMaxRange(){
	if (maxRange.value === ''){
		rangeEnd.innerText = 100;
	} else {
		rangeEnd.innerText = maxRange.value;
	}
}
// When .submit-guess-button is pressed
submitButton.addEventListener('click', functionCaller);

function functionCaller(event){
	event.preventDefault();
	updateFirstName();
	updateFirstGuess();
	updateSecondName();
	updateSecondGuess();
}
//   if .name1 = ""
//     give name1 and name1-error new id that makes name1-error visible and makes name1 have a red border
//   else
//     .score-name1 = .name1
function updateFirstName(){
	if (name1.value === ''){
		document.getElementById("name1").classList.add("error");
	} else {
		scoreName1.innerText = name1.value;
		document.getElementById("name1").classList.remove("error");
	}
}

function updateFirstGuess(){
	if (guess1.value === ''){
		document.getElementById("guess1").classList.add("error");
	} else {
		guessResult1.innerText = guess1.value;
		document.getElementById("guess1").classList.remove("error");
	}
}

function updateSecondName(){
	if (name2.value === ''){
		document.getElementById("name2").classList.add("error");
	} else {
		scoreName2.innerText = name2.value;
		document.getElementById("name2").classList.remove("error");
	}
}

function updateSecondGuess(){
	if (guess2.value === ''){
		document.getElementById("guess2").classList.add("error");
	} else if (guess2.value < minRange.value){
		document.getElementById("guess2-too-low").classList.add("error");
	} else if (guess2.value > maxRange.value){
		document.getElementById("guess2-too-high").classList.add("error");
	} else {
		guessResult2.innerText = guess2.value;
		document.getElementById("guess2").classList.remove("error");
		document.getElementById("guess2-too-low").classList.remove("error");
		document.getElementById("guess2-too-high").classList.remove("error");
	}
}

//   if .name2 = ""
//     give name2 and name2-error new id that makes name2-error visible and makes name2 have a red border
//   else
//     .score-name2 = .name2

//   if .guess1 = ""
//     give guess1 and guess1-error new id that makes guess1-error visible and makes guess1 have a red border
//   elseif guess1 < min-range-input or > max-range-input
//     give guess1 and guess1-error new id that makes guess1-error visible and makes guess1 have a red border
//   else
//     .guess-result1 = .guess1

//   if .guess2 = ""
//     give guess2 and guess2-error new id that makes guess2-error visible and makes guess2 have a red border
//   elseif guess2 < min-range-input or > max-range-input
//     give guess2 and guess2-error new id that makes guess2-error visible and makes guess2 have a red border
//   else
//     .guess-result1 = .guess2

//   if .guess-result1 < randomNumber 
//     give guess-message1 "that's too low!"
//   elseif .guess-result1 > randomNumber
//     give guess-message1 "That's too high!"
//   else
//     give guess-message1 "BOOM!"

//   if .guess-result2 < randomNumber 
//     give guess-message2 "that's too low!"
//   elseif .guess-result2 > randomNumber
//     give guess-message2 "That's too high!"
//   else
//     give guess-message2 "BOOM!"