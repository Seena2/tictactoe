//PROJECT TIC TAC TOE

//SELECTING DOM elemets
//Select the form
let formPlayers = document.getElementById('formPlayers');

//select input texts inside the form and accept player name values
let player1name = document.getElementById('player1');
let player2name = document.getElementById('player2');

//select the gameboard
let gameboard = document.getElementById('gameboard');

//select All the boxes in the gameboard/canvas
let boxes = document.querySelectorAll('[data-box]');



//Select the Element to display wining message
const winingTextMessage = document.querySelector('[data-winning-message-text]');

//select winning message e/t div
const winMsg = document.getElementById('winningMsg');

//Select the restart button
const restartBtn = document.getElementById('restartBtn');

//Create Global variables to hold values
let currentPlayer; //if it is true, its "O's" turn, if false its 'X' turn
//to apply classes to the element,store styles to varaible
const xClass = 'x';
const oClass = 'circle';


//ADD EVENT LISTENERS
//Add Event Listeners to form when it is submited
formPlayers.addEventListener('submit', createPlayers);

//STORAGE 
//Gameboard object
const Gameboard = {
    //Create Array to store the Markers of the players to each cells and
    //fill it with null value for starters
    cells: new Array(9).fill(null)
}

//Array of winning combination of the moves, note array is 0 base so start from 0
const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//Constractors for Players
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}
//GAME LOGICS
startGame();

//add event listener to restart button which calls startGame function
restartBtn.addEventListener('click', startGame);

//function startGame ,apply hover effect on first move
//otherwise you don't know if the game starts or not
function startGame() {
    //Let's assume the first turn is X's turns
    currentPlayer = false;
    boxes.forEach(box => {
        //Remove applied classes when restart button is clicked
        box.classList.remove(xClass);
        box.classList.remove(oClass);
        //remove also event listener when restart is clicked, to re start everythng as new
        box.removeEventListener('click', boxClicked);
        //Also clear the array which stores the moves too
        Gameboard.cells.fill(null);
        //Add Event Listener to each box in the gameboard by iterating items 
        box.addEventListener('click', boxClicked, { once: true }) //once:true means fire event listener only once
    });
    hoverEffect();

    //remove all the classes applied when restart button is clicked
    winMsg.classList.remove('show');
}

//function boxClicked
function boxClicked(e) {
    //create players objects
    createPlayers(e);

    //capture the clicked box's ID
    const clickedbox = e.target.id;

    //determine whose turn is by alternating between classes
    const currentMarker = currentPlayer ? oClass : xClass;

    //apply hover effect to determine whose turn it is and give hint
    hoverEffect();

    //Place the Marker
    placeMarker(clickedbox, currentMarker);

    //switch turns
    switchPlayer();

    //check for winner
    if (checkWinner(currentMarker)) {

    }
    //check for Draw

}

//Function createPlayers
function createPlayers(e) {
    //prevent the submission of form
    e.preventDefault();
    //Make sure the user enters both names of player before start playing
    //accept user value
    const plyr1 = player1name.value;
    const plyr2 = player2name.value;
    if (plyr1 === '' || plyr2 === '') {
        //notify users to inser
        alert('please provide players name first');
    } else {
        // create Player objects using input recieved from user
        const player1 = new Player(plyr1, 'X');
        const player2 = new Player(plyr2, 'O');
    }
}

//hover function, helps to determine whose turn its by applying light color to marker
function hoverEffect() {
    //Make sure no class is applied first
    gameboard.classList.remove(oClass);
    gameboard.classList.remove(xClass);
    if (currentPlayer) {
        gameboard.classList.add(xClass);
    } else {
        gameboard.classList.add(oClass);
    }
}

//placeMarker Function
function placeMarker(clickedbox, currentMarker) {
    //grap the box by its id
    const zcell = document.getElementById(clickedbox);
    //apply the corresponding class to it
    zcell.classList.add(currentMarker);
    //push the marker value to the array
    Gameboard.cells[clickedbox] = currentMarker;
    console.log(Gameboard.cells[clickedbox]);
}

//switch player/Markers by swapping
function switchPlayer() {
    currentPlayer = !currentPlayer; //turns current marker and turn it to opposite
}

//Function Checkwinner
function checkWinner(currentMarker) {
    //check if the values entered matches the wining combinations
    if (
        (Gameboard.cells[0] == currentMarker && Gameboard.cells[1] == currentMarker && Gameboard.cells[2] == currentMarker) ||
        (Gameboard.cells[3] == currentMarker && Gameboard.cells[4] == currentMarker && Gameboard.cells[5] == currentMarker) ||
        (Gameboard.cells[6] == currentMarker && Gameboard.cells[7] == currentMarker && Gameboard.cells[8] == currentMarker) ||
        (Gameboard.cells[0] == currentMarker && Gameboard.cells[3] == currentMarker && Gameboard.cells[6] == currentMarker) ||
        (Gameboard.cells[1] == currentMarker && Gameboard.cells[4] == currentMarker && Gameboard.cells[7] == currentMarker) ||
        (Gameboard.cells[2] == currentMarker && Gameboard.cells[5] == currentMarker && Gameboard.cells[8] == currentMarker) ||
        (Gameboard.cells[0] == currentMarker && Gameboard.cells[4] == currentMarker && Gameboard.cells[8] == currentMarker) ||
        (Gameboard.cells[2] == currentMarker && Gameboard.cells[4] == currentMarker && Gameboard.cells[6] == currentMarker)
    ) {
        const msg = `${currentMarker} is a winner`;
        console.log(msg);
        winingTextMessage.innerText = msg;
        //then show this message by applying the 'show'class to the div
        winMsg.classList.add('show');
    } else {
        //create logic for draw here
        // console.log('draw');
    }

}

/*
function gameOver(draw) {
    if (draw) {

    } else {
        winingTextMessag.innerText = ``;
    }
}
*/

//Assignment
//1- make sure game does not start with out user inserts user/player names
//explore how two events lister for submit and click can be handled on same palge
//2-fix the over effect for first move its 'X' however the hover shows 'o'
//3- code an option when its draw
 //4- look for a way to comapare the input(cells) array with winningCombination other than if comparision
 //5-obtimize the code by using more constructors and less code