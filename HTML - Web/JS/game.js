var stringGuess = prompt("Write a number!");
var guess = Number(stringGuess);
var secretNumber = 4;

//check if guess is right

if (guess === secretNumber) {
	alert("You got it right!")
}

//check if guess is higher
else if (guess > secretNumber) {
	alert("Too high. Guess again!");
}
//check is guess is lower

else {
	alert("Too low! Guess again!")
}

