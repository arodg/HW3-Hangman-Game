// 1. Create wordbank, array of letters
// 2. Set initial variables: Wins, Current Word, # Guesses Remaining, list of Letters Guessed
// 3. Function to choose word from word bank
// 4. Function to display current word with underscores and correct letters
// 5. Function to capture user input
// 6. Function to reset game



// Array of words
var wordBank = [
	"orange", "ghost", "witch", "zombie", "candy", "grave"
	];

// Array of alphabet
var letter = [
	"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
	];

// Win Counter does not refresh with new game
var wins = 0;


// Start new game
function newGame() {
// Counters
var guessRemain = 10;
var lettersGuessed = [];

// Current word randomly chosen
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

// Display of current word with underscores
var currentWord = [];
	for(i = 0; i < randomWord.length; i+=1) {
    	currentWord.push("_");
	}

// HTML for counters
document.getElementById("wins").textContent = wins;
document.getElementById("guessRemain").textContent = guessRemain;
document.getElementById("currentWord").textContent = currentWord.join(" ");
document.getElementById("lettersGuessed").textContent = lettersGuessed;


// Event handler on button to start game
document.onkeyup = function(event) {
	userInput = event.key;
	
	// If userInput is not in alphabet array, alert invalid entry
	if (letter.indexOf(event.key) === -1) {
			alert("Invalid entry");
	}
	
	else {
		var randomWordSplit = randomWord.split("");
		
		// If userInput is not a correct guess, decrease guesses remain, display used letter
		if (randomWordSplit.indexOf(userInput) === -1) {
			guessRemain--;
			document.getElementById("guessRemain").textContent = guessRemain;
			document.getElementById("lettersGuessed").textContent += userInput;
		}
		
		// If userInput is correct, display current word with guessed letter
		if (randomWordSplit.indexOf(userInput) !== -1) {
			var b = randomWordSplit.indexOf(userInput);
			currentWord.splice(b, 1, userInput);
			document.getElementById("currentWord").textContent = currentWord.join(" ");
		}

		// Check to see if whole word has been guessed (no underscores), increase Wins, display correct word
		if (currentWord.indexOf("_") === -1) {
			var x = randomWord;
			wins++;
			document.getElementById("wins").textContent = wins;
			alert(x + "    Scarily Good! Play again?");
			newGame ();
		}

		// If no guesses remaining, reset game
		if (guessRemain === 0) {
			alert("No guesses left! Try again");
			newGame ();
		}
	}
}
}
newGame();