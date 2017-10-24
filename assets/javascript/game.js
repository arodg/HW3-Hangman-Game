// Array of words
var wordBank = [
	"pumpkin", "ghost", "witch", "zombie", "candy", "cemetery"
	]

// Random word
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

// Underscores for chosen word
var underscore = [];
for (var i = 0; i < randomWord.length; i++)	{
	underscore[i] = "_"
};

// Guesses remaining counter
var guessRemain

// Letters already guessed
var lettersGuessed

// Win counter
var Wins

