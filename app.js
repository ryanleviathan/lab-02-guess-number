const generateNumber = Math.floor(Math.random() * 20);
const numberChecker = document.getElementById('numberChecker');
const userInput = document.getElementById('input');
const output = document.getElementById('output');
const reset = document.getElementById('reset');

console.log(generateNumber);

let guessesLeft = 4;

numberChecker.addEventListener('click', () => {
    const tooLow = (userInput.valueAsNumber < generateNumber);
    const tooHigh = (userInput.valueAsNumber > generateNumber);
    const correct = (generateNumber);
    const guessesCounter = document.getElementById('guessesCounter');
    guessesLeft--;

    if (correct) {
        output.textContent = 'You win... this time.';
    }

    if (tooLow) {
        output.textContent = 'You have to guess a number higher than that.';
    }

    if (tooHigh) {
        output.textContent = 'You have to guess a number lower than that.';
    }

    if (guessesLeft === 3) {
        guessesCounter.textContent = 'You only have three guesses left.';
    }
    
    if (guessesLeft === 2) {
        guessesCounter.textContent = 'You only have two guesses left. You are running out of guesses.';
    }
    
    if (guessesLeft === 1) {
        guessesCounter.textContent = 'You only have one guess left. Trust your instincts.';
    }

    if (guessesLeft === 0) {
        output.textContent = 'You lose... Too bad.';
    }

});

reset.addEventListener('click', () => {
    location.reload();
});