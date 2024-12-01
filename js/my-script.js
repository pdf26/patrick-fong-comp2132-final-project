//nodes
const $round = $('#round');
const $computerScore = $('#computerScore');
const $computerTotalScore = $('#computerTotalScore');
const $userScore = $('#userScore');
const $userTotalScore = $('#userTotalScore');
const $winner = $('#winner');
const $popupWinner = $(`#popupWinner`);
const $btnRoll = $('#rollBtn');
const $btnReset = $('#resetBtn');

//variables
const max = 6;
const maxRounds = 3;
let round = 0;
let computerDiceValue1 = 0;
let computerDiceValue2 = 0;
let userDiceValue1 = 0;
let userDiceValue2 = 0;
let computerScore = 0;
let userScore = 0;
let computerTotal = 0;
let userTotal = 0;
let winner = '';

/*
- dice object
- array to hold dice values
- function roll to return a random index number between 0 and 6 
- this.face to return value at this.values[index]
*/
class Dice {

    constructor(){

        this.values = [1,2,3,4,5,6];
        this.face = 0;
    }
}

Dice.prototype.roll = function(){
    let index = 0; 
    index = Math.floor(Math.random() * max); 
   
    return this.face = this.values[index]; 
}

/*
- player object
- takes a player name 
- function getScore to compare dice values and return the appropriate value
- this.score to return the value of both dice after comparison
*/
class Player {

    constructor(name) {

        this.name = name;
        this.score = 0;
    }
}

Player.prototype.getScore = function (dice1, dice2) {
    this.score;

    if ((dice1 == 1 || dice2 == 1)) {
        this.score = 0;

    } else if (dice1 == dice2) {
        this.score = (dice1 + dice2) * 2;

    } else {
        this.score = (dice1 + dice2);
    }
    return this.score;
}