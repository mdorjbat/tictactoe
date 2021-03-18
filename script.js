const gameTitle = document.querySelector(".title");
const gamePlayerOne = document.querySelector(".player_one");
const gamePlayerTwo = document.querySelector(".player_two");
const gameStatus = document.querySelector(".game_status");
const gameRestart = document.querySelector(".reload");
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

            }else if(status === "O"){
                this.counter = 1;
                gameStatus.innerText = "Player 2 WON!";
            }else{
                if(this.counter === 9){
                    this.counter = 1;
                    gameStatus.innerText = "This is a Tie";
                }else{
                    this.counter++;
                    gameStatus.innerText =  this.counter %2 === 1 ? "Now Player1's turn": "Now Player2's turn";
                }

            }
    }
}

let game = new Game();

gameStatus.innerText = gameB1.addEventListener("click", function (){
    game.play(0);
    gameB1.textContent = btnStatus;
    gameB1.disabled=true;});

gameStatus.innerText = gameB2.addEventListener("click", function (){
    game.play(1);
    gameB2.textContent = btnStatus;
    gameB2.disabled=true;});
gameStatus.innerText = gameB3.addEventListener("click", function (){
    game.play(2);
    gameB3.textContent = btnStatus;
    gameB3.disabled=true;});
gameStatus.innerText = gameB4.addEventListener("click", function (){
    game.play(3);
    gameB4.textContent = btnStatus;
    gameB4.disabled=true;});
gameStatus.innerText = gameB5.addEventListener("click", function (){
    game.play(4);
    gameB5.textContent = btnStatus;
    gameB5.disabled=true;});
gameStatus.innerText = gameB6.addEventListener("click", function (){
    game.play(5);
    gameB6.textContent = btnStatus;
    gameB6.disabled=true;});
gameStatus.innerText = gameB7.addEventListener("click", function (){
    game.play(6);
    gameB7.textContent = btnStatus;
    gameB7.disabled=true;});
gameStatus.innerText = gameB8.addEventListener("click", function (){
    game.play(7);
    gameB8.textContent = btnStatus;
    gameB8.disabled=true;});
gameStatus.innerText = gameB9.addEventListener("click", function (){
    game.play(8);
    gameB9.textContent = btnStatus;
    gameB9.disabled=true;});

gameStatus.innerText = "";
// Window.localStorage.setItem("player1", 10);
// let temp = localStorage.getItem("player1");

gameRestart.addEventListener("click", () => location.reload());
