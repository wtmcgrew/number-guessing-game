let message = document.getElementById("message");
let messageTwo = document.getElementById("message-2");

let answer = Math.floor(Math.random() * 100) + 1; 
/*
Math.random() Generates a number between 0 and 1 (not including 0)
Multiples by 100 since we're looking for a number tween 1-100
Math.floor() Rounds this answer down to the nearest whole number
Adding 1 gets a whole number between 1 and 100
*/

let numberOfGuesses = 0;
let guessedNumbers = [];

function tries() {
	event.preventDefault(); // Prevents submit button from being actually submitted as a form

	let userGuess = document.getElementById("guess").value; // Grabs value of number that is submitted

	if (userGuess === null || userGuess === "") { // Test case tif submit is clicked or enter is pressed with nothing inside box
		alert("Please enter a number");
		return false;
	}
	else {
		guessedNumbers.push(userGuess) // Will show input on screen for user to see what numbers have been entered
		numberOfGuesses += 1;
		// Sets number of tries to 3
		if (numberOfGuesses > 3) {
			alert("You are out of tries. Click reset and try again!");
		}
		else if (userGuess < answer) {
			message.textContent = "Your guess is too low";
			messageTwo.textContent = "Guessed Numbers Are: " + guessedNumbers;
		}
		else if (userGuess > answer) {
			message.textContent = "Your guess is too high";
			messageTwo.textContent = "Guessed Numbers Are: " + guessedNumbers;
		}
		else if (userGuess === answer) {
			message.textContent = "That's correct!";
			alert("Click reset to play again!");
		}
	}
}

function myButton () { // Resets form/page
	location.reload();
}