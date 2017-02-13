
$(document).ready(function() {

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

	var array = [];
	while(array.length < 4) {
		var randomGemNumber = Math.floor(Math.random() * 12) + 1;
		if(array.indexOf(randomGemNumber) > -1) continue;
		array[array.length] = randomGemNumber;
		}
		console.log(array);

	var diamond = array[0];
	console.log(diamond);
	var ruby = array[1];
	console.log(ruby);
	var emerald = array[2];
	console.log(emerald);
	var onyx = array[3];
	console.log(onyx);

	

	//reset function
	function reset() {
		//reset random #
		var randomNumber = Math.floor(Math.random() * 102) + 19;
		$("#randomNumber").html(randomNumber);
		//reset user score
		userScore = 0;
		//reset random # for each crystal

		}
});