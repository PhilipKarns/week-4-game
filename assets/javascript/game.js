
$(document).ready(function() {

	//variables
	var wins = 0;
	console.log(wins);
	var losses = 0;
	console.log(losses);
	var userScore = 0;
	$("#userScore").html(userScore);
	console.log(userScore);

	//generate random number that user needs to match and display it in browser
	var randomNumber = Math.floor(Math.random() * 102) + 19;
	$("#randomNumber").html(randomNumber);
	console.log(randomNumber);

	//generate random number for each crystal
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

	$("#button-1").attr("data-crystalvalue", array[0]);
	$("#button-2").attr("data-crystalvalue", array[1]);
	$("#button-3").attr("data-crystalvalue", array[2]);
	$("#button-4").attr("data-crystalvalue", array[3]);

	//reset function
	function reset() {
		//reset random #
		var randomNumber = Math.floor(Math.random() * 102) + 19;
		$("#randomNumber").html(randomNumber);
		
		//reset user score
		userScore = 0;
		$("#userScore").html(userScore);
		
		//reset random # for each crystal
		var array = [];
		
		while(array.length < 4) {
		var randomGemNumber = Math.floor(Math.random() * 12) + 1;
		if(array.indexOf(randomGemNumber) > -1) continue;
		array[array.length] = randomGemNumber;
		}

		diamond = array[0];
	console.log(diamond);
		ruby = array[1];
	console.log(ruby);
		emerald = array[2];
	console.log(emerald);
		onyx = array[3];
	console.log(onyx);

		$("#button-1").attr("data-crystalvalue", array[0]);
		$("#button-2").attr("data-crystalvalue", array[1]);
		$("#button-3").attr("data-crystalvalue", array[2]);
		$("#button-4").attr("data-crystalvalue", array[3]);
	}

	$(".btn").on("click", function() {
		var crystalValue = ($(this).attr("data-crystalvalue"));
		console.log(crystalValue);
    	crystalValue = parseInt(crystalValue);
    	userScore += crystalValue;
    	console.log(userScore);
    	$("#userScore").html(userScore);

    	//determine win/loss
		if (userScore === randomNumber) {
	      wins++;
	      $("#wins").html(wins);
	      reset();
	    }

	    else if (randomNumber < userScore) {
	      losses++;
	      $("#losses").html(losses);
	      reset();
	    }
	});
});