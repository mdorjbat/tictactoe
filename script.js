// ----------------------------Initializtion----------------------------------
// This part of the code initializes variables and connects html with the code.
const gameTitle = document.querySelector(".title");
const gamePlayerOne = document.querySelector(".player_one");
const gamePlayerTwo = document.querySelector(".player_two");
const gameStatus = document.querySelector(".game_status");
const gameRestart = document.querySelector(".reload");
const playAgain = document.querySelector(".play_again")
const gameB1 = document.querySelector(".btn1");
const gameB2 = document.querySelector(".btn2");
const gameB3 = document.querySelector(".btn3");
const gameB4 = document.querySelector(".btn4");
const gameB5 = document.querySelector(".btn5");
const gameB6 = document.querySelector(".btn6");
const gameB7 = document.querySelector(".btn7");
const gameB8 = document.querySelector(".btn8");
const gameB9 = document.querySelector(".btn9");
let status = "";
let btnStatus = "";
let bleep = new Audio();
bleep.src = "https://www.soundjay.com/button/sounds/beep-07.mp3";

let win = new Audio();
win.src = "https://www.myinstants.com/media/sounds/12_3.mp3"

let playerOneScore = 0;
let playerTwoScore = 0;

// --------------------------Game Class----------------------------------
// This is game class. It contains 2 variables board and counter.
// Board variable contains game status. Counter variable counts how many
// done so far. Game class also contains 5 functions to set board with a value,
// check the winning status of the game, and initialize the game.
class Game{
    constructor() {

        this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        this.counter = 1;
    }

    setX(btn){
             if(this.board[btn]===" ") {
                this.board[btn] = "X";
                btnStatus = "X";
             }else{
                 btnStatus = "";
                 this.counter--;
             }
    }
    setO(btn){
            if(this.board[btn]===" ") {
                this.board[btn] = "O";
                btnStatus = "O";
            }else{
                btnStatus = "";
                this.counter--;
            }
    }
    checkStatus(){

            if(game.board[0]!==" " && (game.board[0] === game.board[1]) && (game.board[1] === game.board[2])){
                if (game.board[0]==="X")
                    status = "X";
                else if(game.board[0]==="O")
                    status = "O";
            }
            else if(game.board[3]!==" " && game.board[3] === game.board[4] && game.board[4] === game.board[5]){
                if (game.board[3]==="X")
                    status = "X";
                else if(game.board[3]==="O")
                    status = "O";
            }
            else if(game.board[6]!==" " && game.board[6] === game.board[7] && game.board[7] === game.board[8]){
                if (game.board[6]==="X")
                    status = "X";
                else if(game.board[6]==="O")
                    status = "O";
            }
            else if(game.board[0]!==" " && game.board[0] === game.board[3] && game.board[3] === game.board[6]){
                if (game.board[0]==="X")
                    status = "X";
                else if(game.board[0]==="O")
                    status = "O";
            }
            else if(game.board[1]!==" " && game.board[1] === game.board[4] && game.board[4] === game.board[7]){
                if (game.board[1]==="X")
                    status = "X";
                else if(game.board[1]==="O")
                    status = "O";
            }
            else if(game.board[2]!==" " && game.board[2] === game.board[5] && game.board[5] === game.board[8]){
                if (game.board[2]==="X")
                    status = "X";
                else if(game.board[2]==="O")
                    status = "O";
            }
            else if(game.board[0]!==" " && game.board[0] === game.board[4] && game.board[4] === game.board[8]){
                if (game.board[0]==="X")
                    status = "X";
                else if(game.board[0]==="O")
                    status = "O";
            }
            else if(game.board[2]!==" " && game.board[2] === game.board[4] && game.board[4] === game.board[6]){
                if (game.board[2]==="X")
                    status = "X";
                else if(game.board[2]==="O")
                    status = "O";
            }
            else status = " ";

    }
    play(btn){

            if(this.counter %2 === 1){
                this.setX(btn);
            }else {
                this.setO(btn);
            }
            this.checkStatus()


            if( status === "X"){
                this.counter = 1;
                gameStatus.innerText = "Player 1 WON!";
                playerOneScore++;
                allButtonDisable()
                win.play();
            }else if(status === "O"){
                this.counter = 1;
                gameStatus.innerText = "Player 2 WON!";
                playerTwoScore++;
                allButtonDisable()
                win.play();

            }else{
                if(this.counter === 9){
                    this.counter = 1;
                    gameStatus.innerText = "This is a Tie";
                }else{
                    this.counter++;
                    gameStatus.innerText =  this.counter %2 === 1 ? "Now Player 1's turn": "Now Player 2's turn";
                }

            }
    }
    playAgain(){
        status = "";
        btnStatus = "";
        gameB1.textContent = btnStatus;
        gameB2.textContent = btnStatus;
        gameB3.textContent = btnStatus;
        gameB4.textContent = btnStatus;
        gameB5.textContent = btnStatus;
        gameB6.textContent = btnStatus;
        gameB7.textContent = btnStatus;
        gameB8.textContent = btnStatus;
        gameB9.textContent = btnStatus;

        allButtonEable();

        this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        this.counter = 1;
        gamePlayerOne.innerText = "Player One Score: " + playerOneScore;
        gamePlayerTwo.innerText = "Player Two Score: " + playerTwoScore;
        gameStatus.innerText = "";
    }
}
//------------------------------Object Creation--------------------------------
// initialization and creation of game object

let game = new Game();

//------------------------------Event Handler ---------------------------------
//The following code handles the events.

gameStatus.innerText = gameB1.addEventListener("click", function (){
    game.play(0);
    gameB1.textContent = btnStatus;
    gameB1.disabled=true;
    bleep.play();});

gameStatus.innerText = gameB2.addEventListener("click", function (){
    game.play(1);
    gameB2.textContent = btnStatus;
    gameB2.disabled=true;
    bleep.play()});
gameStatus.innerText = gameB3.addEventListener("click", function (){
    game.play(2);
    gameB3.textContent = btnStatus;
    gameB3.disabled=true;
    bleep.play()});
gameStatus.innerText = gameB4.addEventListener("click", function (){
    game.play(3);
    gameB4.textContent = btnStatus;
    bleep.play()
    gameB4.disabled=true;});
gameStatus.innerText = gameB5.addEventListener("click", function (){
    game.play(4);
    gameB5.textContent = btnStatus;
    bleep.play()
    gameB5.disabled=true;});
gameStatus.innerText = gameB6.addEventListener("click", function (){
    game.play(5);
    gameB6.textContent = btnStatus;
    bleep.play()
    gameB6.disabled=true;});
gameStatus.innerText = gameB7.addEventListener("click", function (){
    game.play(6);
    gameB7.textContent = btnStatus;
    bleep.play()
    gameB7.disabled=true;});
gameStatus.innerText = gameB8.addEventListener("click", function (){
    game.play(7);
    gameB8.textContent = btnStatus;
    bleep.play()
    gameB8.disabled=true;});
gameStatus.innerText = gameB9.addEventListener("click", function (){
    game.play(8);
    gameB9.textContent = btnStatus;
    bleep.play()
    gameB9.disabled=true;});


gameStatus.innerText = "";


gameRestart.addEventListener("click", () => location.reload());
playAgain.addEventListener("click", () => game.playAgain());

//-----------------------Additional Function---------------------------------------
// Once game ends all the keys should be locked until new game starts.

function allButtonDisable(){
    gameB1.disabled=true;
    gameB2.disabled=true;
    gameB3.disabled=true;
    gameB4.disabled=true;
    gameB5.disabled=true;
    gameB6.disabled=true;
    gameB7.disabled=true;
    gameB8.disabled=true;
    gameB9.disabled=true;
}
function allButtonEable(){
    gameB1.disabled=false;
    gameB2.disabled=false;
    gameB3.disabled=false;
    gameB4.disabled=false;
    gameB5.disabled=false;
    gameB6.disabled=false;
    gameB7.disabled=false;
    gameB8.disabled=false;
    gameB9.disabled=false;
}

