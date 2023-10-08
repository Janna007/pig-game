'use strict';
//selecting elements
const score0el=document.querySelector('#score--0');
const score1el=document.querySelector('#score--1');
const diceel=document.querySelector('.dice');
const btnroll=document.querySelector('.btn--roll');
const current0el=document.querySelector('#current--0');
const current1el=document.querySelector('#current--1')
const player0el=document.querySelector('.player--0')
const player1el=document.querySelector('.player--1')
const btnhold=document.querySelector('.btn--hold');
//set the starting value of selected elements
score0el.textContent=0;
score1el.textContent=0;
diceel.classList.add('hidden');
const scores=[0,0];
let currentscore=0;
let activeplayer=0;
//btn roll functions
btnroll.addEventListener('click',function(){
    //1.generate a random number between 1 and 6
    const dice=Math.trunc(Math.random()*6)+1;

    //2.display it

    diceel.classList.remove('hidden');
    diceel.src=`dice-${dice}.png`;

    //when dice is not equal to 1 
    if(dice !==1){
        currentscore+=dice;
       // current0el.textContent=currentscore;
       document.getElementById(`current--${activeplayer}`).textContent=currentscore;
    }else{
       
     
        document.getElementById(`current--${activeplayer}`).textContent=0;
       
        activeplayer=activeplayer===0?1:0;
        currentscore=0;
        player0el.classList.toggle('player--active');
        player1el.classList.toggle('player--active');
    }
})
btnhold.addEventListener('click',function(){
    //add current score to score of active player
    scores[activeplayer]+=currentscore;
    document.getElementById(`score--${activeplayer}`).textContent=currentscore;

    //check score is greater than 100 then finish the game 
    if(`score--${activeplayer>=10}`){
        document.querySelector(`player--${activeplayer}`).classList.add('player--winner')
    }
})