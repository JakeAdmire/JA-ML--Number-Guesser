var minRange = document.querySelector(“.min-range-input”);
var maxRange = document.querySelector(“.max-range-input”);
var updateButton = document.querySelector(“.update-button”);
var rangeStart = document.querySelector(“.range-start”);
var rangeEnd = document.querySelector(“.range-end”);

updateButton.addEventListener(“click”, function() {
   rangeStart.innerHTML = minRange.value;
   rangeEnd.innerHTML = maxRange.value;
 });