function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);

    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

function getTextElementById(elementId) {
    const scoreElement = document.getElementById(elementId)

    const scoreText = scoreElement.innerText;
    const score = parseInt(scoreText);
    
    return score;
}

function setTextElementById(elementId, value) {
    const scoreElement = document.getElementById(elementId)
    scoreElement.innerText = value;

    
}

function gameOver() {
    showElementById('score-board')
    hideElementById('play-ground')
    const score = getTextElementById('score')
    setTextElementById('final-score', score)
    
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet  = currentAlphabetElement.innerText
    
    
    removeBackgroundColorById(currentAlphabet)
}

