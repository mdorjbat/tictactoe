# Tictactoe

**How to play**

This is famous game of tic-tac-toe. Two players take turn to mark
their move on a 3x3 board. The first player automatically 
selected as X and second as O. The objective of the game is 
to line up three X's or O's. You can line the up horizontally, 
vertically, or diagonally. Once you selected a cell on the board 
you cannot change that cell. If you want to continue with the same
opponent again and keep your score press "Play Again" button.
To restart a game press RESTART button.
 
The game can be played on any device with a browser and an 
internet connection. 

Use following link to play the game:

https://mdorjbat.github.io/tictactoe/

**How it's done**

Used: CSS, HTML, JAVASCRIPT.

Link to wireframe: https://wireframe.cc/6Nw2kK

![IMG_0308](https://user-images.githubusercontent.com/79872462/111795103-e563ea80-8894-11eb-812a-39c91c515e74.jpg)

Game started with planning on the paper and transferred to the wireframe.
After a few modifications, I ended up choosing layout that's friendly both
on a desktop and on a mobile device. First prepared web layout using CSS 
grid feature. Then connected objects on the page with javascript variables.
The most time-consuming part was game logic. Saved all the cell status on the
board in an array with size of 9. Win condition was checked by comparing 
8 conditions of win, which are all rows, columns, and diagonals. 
After basic working game added some features such as scoreboard, game status,
reset button, play again button, mouse hover effect, and sound effect.
In the future I can improve game by making it available to online with other 
players.
