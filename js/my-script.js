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

//popup
const popup = document.getElementById('pop-up'); 
const closeButton  = document.getElementById("close-pop-up");

closeButton.addEventListener('click', function (){
    popup.style.display = "none";
});

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
- describeSelf to return dice image
*/
class Dice {

    constructor(){

        this.values = [1,2,3,4,5,6];
        this.face = 0;
    }

    describeSelf() {
        return `images/dice-${this.face}.png`;
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

/*
- check count to determine if 3 rolls were made
- compare computer total score and user total score
- display the winner of the dice game
*/
function displayWinner(count){

    if(count === 3){
        if(computerTotal > userTotal){
            winner = `Computer`;
        }else if (userTotal > computerTotal){
            winner = `User`;
        }else{
            winner = `It's a tie`;
        }
        $winner.html(`Winner: ${winner}`);
        $popupWinner.html(`${winner}`);

        myPopUpTimeOut = setTimeout(function(){
            popup.style.opacity = 1;
            popup.style.display = 'block';
        }, 1000);
    }
}

//Instantiate Dice Objects
let computerDice1 = new Dice();
let computerDice2 = new Dice();
let userDice1 = new Dice();
let userDice2 = new Dice();

//Instantiate Player Objects
let computerPlayer = new Player('Computer');
let userPlayer = new Player('User');

$('#rollBtn').on('click', function () {

    if(round < maxRounds){

        round++;
        $round.html(`Round: ${round}`);

        computerDiceValue1 = computerDice1.roll();
        computerDiceValue2 = computerDice2.roll();
        computerScore = computerPlayer.getScore(computerDiceValue1, computerDiceValue2);
        $computerScore.html(`The current score this round: ${computerScore}`);

        userDiceValue1 = userDice1.roll();
        userDiceValue2 = userDice2.roll();
        userScore = userPlayer.getScore(userDiceValue1, userDiceValue2);
        $userScore.html(`The current score this round: ${userScore}`);

        $(`.dicePreview`).fadeOut(300, function(){
            $(`#computerDiceImage1`).attr('src', `${computerDice1.describeSelf()}`);
            $(`#computerDiceImage2`).attr('src', `${computerDice2.describeSelf()}`);
            $(`#userDiceImage1`).attr('src', `${userDice1.describeSelf()}`);
            $(`#userDiceImage2`).attr('src', `${userDice2.describeSelf()}`);
        }).fadeIn(300);
        
        computerTotal += computerScore;
        userTotal += userScore;

        $computerTotalScore.html(`Total Score: ${computerTotal}`);
        $userTotalScore.html(`User Score: ${userTotal}`);
    }

    displayWinner(round);
});
