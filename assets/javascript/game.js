///////////////////////////////////////////////
//PseudoCode/Plan/////////////////////////////
//Specify variables
//Assign random number to the corresponding div
//Assign a random value to each of the 4 crystals
//Add the value of the crystal to to totalScore div
//Have the totalScore div add each number given to it
//If randomNumber = totalScore, then win++
//If totalScore > randomNumber, then loss++
//Once either of these things happens, reset randomNumber and reset the value of the crystals.
///////////////////////////////////////////////////////////////////////////////////////////////////////

var wins = 0;
var losses = 0;
var totalScore = 0;

var randomNumber = Math.floor(Math.random() * 120) + 19;
	console.log(randomNumber);

//assign random number to each crystal 1-12
var firstCrystal = Math.floor(Math.random() * 12) +1;	
var secondCrystal = Math.floor(Math.random() * 12) +1;
var thirdCrystal = Math.floor(Math.random() * 12) +1;
var fourthCrystal = Math.floor(Math.random() * 12) +1;

//function that starts after loading page
$(document).ready(function(){
	//creating random number 19-120
	

	//show random number is corresponding div
	$(".randomNumber").text("Random Number: " + randomNumber)

	//assign random number to each crystal 1-12
	var firstCrystal = Math.floor(Math.random() * 12) +1;
	var secondCrystal = Math.floor(Math.random() * 12) +1;
	var thirdCrystal = Math.floor(Math.random() * 12) +1;
	var fourthCrystal = Math.floor(Math.random() * 12) +1;

	//show # of wins and losses/total user score in html
	$(".wins").text("Wins: " + wins);
	$(".losses").text("Losses: " + losses);
	$(".totalScore").text(totalScore);

	if (totalScore == randomNumber) {
			wins++;
			$(".wins").text("You Won!! Wins: " + wins);
			restart();
			console.log(wins);
		}
		else if (totalScore > randomNumber) {
			losses++;
			$(".losses").text("You Lose! Losses: " + losses);
			restart();
			console.log(losses);
		}

});


//when game ends after clicking crystals, need to reset where crystals are a differenct random number!
function restart() {
	//resets random number
	randomNumber = Math.floor(Math.random() * 120) + 19;
	$(".randomNumber").text("Random Number: " + randomNumber)


	//resets each crystal to a new value
	firstCrystal = Math.floor(Math.random() * 12) +1;
	secondCrystal = Math.floor(Math.random() * 12) +1;
	thirdCrystal = Math.floor(Math.random() * 12) +1;
	fourthCrystal = Math.floor(Math.random() * 12) +1;

	//resets the total score of user to 0
	totalScore = 0;
	$(".totalScore").text(totalScore);
	$(".wins").text("Wins: " + wins);
	$(".losses").text("Losses: " + losses);
	

	if (totalScore == randomNumber) {
			wins++;
			$(".wins").text("You Won!! Wins: " + wins);
			restart();
			console.log(wins);
		}
		else if (totalScore > randomNumber) {
			losses++;
			$(".losses").text("You Lose! Losses: " + losses);
			restart();
			console.log(losses);
		}

};

//setting up what each click on each crystal does
//crystal 1
$(".firstCrystal").click(function() {
	totalScore = totalScore + firstCrystal;
	$(".totalScore").text(totalScore);
	console.log(totalScore);

	if (totalScore === randomNumber) {
		wins++;
		$(".wins").text("You Won!! Wins: " + wins);
		restart();
		console.log(wins);
	}
		else if (totalScore > randomNumber) {
			losses++;
			$(".losses").text(" You Lose! Losses: " + losses);
			restart();
			console.log(losses);
		}
});

//crystal 2
$(".secondCrystal").on("click", function(){
	totalScore = totalScore + secondCrystal;

	$(".totalScore").text(totalScore);

	if (totalScore == randomNumber) {
			wins++;
			$(".wins").text("You Won!! Wins: " + wins);
			restart();
			console.log(wins);
		}
		else if (totalScore > randomNumber) {
			losses++;
			$(".losses").text("You Lose! Losses: " + losses);
			restart();
			console.log(losses);
		}	
});

//crystal 3
$(".thirdCrystal").on("click", function(){
	totalScore = totalScore + thirdCrystal;

	$(".totalScore").text(totalScore);

	if (totalScore == randomNumber) {
			wins++;
			$(".wins").text("You Won!! Wins: " + wins);
			restart();
			console.log(wins);
		}
		else if (totalScore > randomNumber) {
			losses++;
			$(".losses").text("You Lose! Losses: " + losses);
			restart();
			console.log(losses);
		}	
});

//crystal 4
$(".fourthCrystal").on("click", function(){
	totalScore = totalScore + fourthCrystal;

	$(".totalScore").text(totalScore);

	if (totalScore == randomNumber) {
			wins++;
			$(".wins").text("You Won!! Wins: " + wins);
			restart();
			console.log(wins);
		}
		else if (totalScore > randomNumber) {
			losses++;
			$(".losses").text("You Lose! Losses: " + losses);
			restart();
			console.log(losses);
		}	
});








