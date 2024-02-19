// While Loops
// 1. Guessing Game: Keep prompting the user for a guess until they guess the correct number.

// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Initialize variables
let guessedNumber;
let attempts = 0;

// Game loop using while
while (guessedNumber !== secretNumber) {
    // Prompt the user for a guess
    guessedNumber = parseInt(prompt("Guess the number (between 1 and 10):"));

    // Check if the guess is correct
    if (guessedNumber === secretNumber) {
        console.log(`Congratulations! You guessed the correct number (${secretNumber}) in ${attempts} attempts.`);
    } else {
        // Provide feedback and continue the loop
        console.log("Incorrect guess. Try again!");
        attempts++;
    }
}





