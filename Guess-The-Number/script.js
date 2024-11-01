'use strict';

// document.querySelector('.number').textContent= 13;
// document.querySelector('.message').textContent= "Correct Answer!";
// document.querySelector('.guess').value= 20;

let correctNumber= Math.trunc(Math.random() *20) +1;
let score=20;
let highScore=0;

const displayMessage= function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess =Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        displayMessage('No content');
    } else if(guess === correctNumber && score >1){
        document.querySelector('.number').textContent=correctNumber;
        displayMessage('Correct Answer!');
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width= '30rem';
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent= highScore;
        }
    } else if(guess!== correctNumber){
        displayMessage(guess>correctNumber? 'too high': 'too low');
        if(score>1){
            score--;
            document.querySelector('.score').textContent=score;
        } else {
            document.querySelector('.score').textContent=0;
            displayMessage('Game Over!')
        }
    }
    //  else if(guess > correctNumber){
    //     document.querySelector('.message').textContent= 'Higher number!';
    //     if(score>1){
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     } else {
    //         document.querySelector('.score').textContent=0;
    //         document.querySelector('.message').textContent= 'Game Over!'
    //     }
    // } else if(guess < correctNumber){
    //     document.querySelector('.message').textContent= 'lower number';
    //     if(score>1){
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     } else {
    //         document.querySelector('.score').textContent=0;
    //         document.querySelector('.message').textContent= 'Game Over!'
    //     }
    // }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    correctNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('start guessing...');
    document.querySelector('.guess').value= '';
    document.querySelector('.number').textContent='?';
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width= '15rem';
})