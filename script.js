let messageOne = document.getElementById("message-1");
let messageTwo = document.getElementById("message-2");
let messageThree = document.getElementById("message-3");

let answer = Math.floor(Math.random() * 100) + 1;
let numberOfGuesses = 0;
let guessedNumbers = [];

function tries() {
	let userGuess = document.getElementById("guess").value;

	if (userGuess < 1 || userGuess > 100) {
		alert("Please enter a number between 1 and 100");
	}
	else {
		guessedNumbers.push(userGuess);
		numberOfGuesses += 1;

		if (userGuess < answer) {
			messageOne.textContent = "Your guess is too low";
			messageTwo.textContent = "No. of Guesses: " + numberOfGuesses;
			messageThree.textContent = "Guessed Numbers Are: " + guessedNumbers;
		}
		else if (userGuess > answer) {
			messageOne.textContent = "Your guess is too high";
			messageTwo.textContent = "No. of Guesses: " + numberOfGuesses;
			messageThree.textContent = "Guessed Numbers Are: " + guessedNumbers;
		}
		else if (userGuess === answer) {
			messageOne,textContent = "That's correct!";
			messageTwo,textContent = "The correct answer is " + answer;
		}
	}
}