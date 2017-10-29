// 1. Create wordbank, array of letters
// 2. Set initial variables: Wins, Current Word, # Guesses Remaining, list of Letters Guessed
// 3. Function to choose word from word bank
// 4. Function to reset variable for new game
// 5. Function to capture user input



// Array of words
var wordBank = [
	"pumpkin", "ghost", "witch", "zombie", "candy", "cemetery"
	];

// Alphabet array
var letter = [
	"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
	];

// Counters
var wins = 0;
var guessRemain = 10;
var lettersGuessed = [];


// Random word
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];


// Underscores for chosen random word
var current = "";
	for(i = 0; i < randomWord.length; i+=1) {
    	current = current + "_ ";
	}


// Html for initial variables
document.getElementById("wins").textContent = wins;
document.getElementById("guessRemain").textContent = guessRemain;
document.getElementById("currentWord").textContent = current;


// Event handler on button to start game
document.onkeyup = function(event) {
	userInput = event.key;
	if (letter.indexOf(event.key) === -1) {
			alert("Invalid entry");
	}
	else {
		var randomWordSplit = randomWord.split("");
		if (randomWordSplit.indexOf(userInput) === -1) {
			guessRemain--;
			document.getElementById("guessRemain").textContent = guessRemain;
			document.getElementById("lettersGuessed").textContent += userInput;
		}
		if (randomWordSplit.indexOf(userInput) != -1) {
			var b = randomWordSplit.indexOf(userInput);
			
			
		}
	}
}