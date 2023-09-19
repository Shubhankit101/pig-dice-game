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

let currentScore = 0;
// Starting Conditions
//Setting the Score to 0
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden'); //Hiding the dice initially

//Rolling dice Logic 
btnRoll.addEventListener('click', function()
{
    //Generating A random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; //Math.Trunc will remove the decimal numbers

    //Displaying the Dice 
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;
    console.log(`number in dice is ${dice}`);

    //Check for rolled If Rolled 1 Switch the Player
    if(dice !== 1){
        // Add the score from the dice
        currentScore += dice;
        current0Element.textContent = currentScore; 
    }
    else {}
});

