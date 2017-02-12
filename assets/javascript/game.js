//variables
var wins = 0;
console.log(wins);
var losses = 0;
console.log(losses);
var userScore = 0;
console.log(userScore);
var randomNumber = Math.floor(Math.random() * 102) + 19;
$("#randomNumber").html(randomNumber);
console.log(randomNumber);

//reset function
function reset() {
	var randomNumber = Math.floor(Math.random() * 102) + 19;
}
