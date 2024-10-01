

function handleKeyboardButtonPress(event) {
    const userPressedAlphabet = event.key;


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
    showElementById('play-ground');
    continueGame();
}