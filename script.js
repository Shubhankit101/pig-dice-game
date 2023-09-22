'use strict';
//Selecting Elements 
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1'); // getElementById is bit faster than QuerySelector
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

const totalScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isPlaying = true;
// Starting Conditions
//Setting the Score to 0
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden'); //Hiding the dice initially
  
//function to switch 
const switchPlayer = function(){
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = (activePlayer === 0) ? 1 : 0;
    //toggle checks if the class is there or not if its present it will remove else it will add. 
    player0Element.classList.toggle('player--active'); 
    player1Element.classList.toggle('player--active');
}
//Rolling dice Logic 
btnRoll.addEventListener('click', function() {
    if(isPlaying){
    //Generating A random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; //Math.Trunc will remove the decimal numbers
    //Displaying the Dice 
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;
    //Check for rolled If Rolled 1 Switch the Player
    if (dice !== 1) {
        // Add the score from the dice
        currentScore += dice; 
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
         switchPlayer();
    }
}
});
//Holding the score 
btnHold.addEventListener('click', function(){
    if(isPlaying){
    // Add current score to active palyer's score
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];

    //In case of Player winning
    if(totalScore[activePlayer] >= 20){
        isPlaying = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceElement.classList.add('hidden');
    } 
    else     
        switchPlayer(); //switching to the next Player
}
});