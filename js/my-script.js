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