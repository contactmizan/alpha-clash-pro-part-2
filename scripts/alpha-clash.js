/*
function play() {
    //step-1: hide the home section
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    //step-2: show the playground
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');

}
*/

// another way :- function diye call kore 

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
//key board e kon key press ta jana jay
function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    //get the expected alphabet to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();


    //check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point');
        console.log('you have pressed correctly ', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you missed. you lost a life');
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet', alphabet);

    //set randomlyy generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);
}