

function handleKeyboardButtonPress(event) {
    const userPressedAlphabet = event.key;

    if (userPressedAlphabet === "Escape") {
        gameOver()
    }


    const expectedAlphabetElement = document.getElementById("current-alphabet")
    const expectedAlphabetText = expectedAlphabetElement.innerText;
    const expectedAlphabet = expectedAlphabetText.toLowerCase();


    if (userPressedAlphabet === expectedAlphabet) {
        const score = getTextElementById('score')
        const value = score + 1
        setTextElementById('score',value)


        removeBackgroundColorById(expectedAlphabet)
        continueGame()


    }
    else {
        const life = getTextElementById('life')
        const value = life - 1
        setTextElementById('life', value)

        if (value === 0) {
            gameOver()
            
        }


    }

}

document.addEventListener('keyup', handleKeyboardButtonPress)




function continueGame() {
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();


    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    hideElementById('score-board');
    showElementById('play-ground');

    setTextElementById('score',0)
    setTextElementById('life',10)
    
    continueGame();
}

