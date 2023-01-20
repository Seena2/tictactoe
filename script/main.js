//PROJECT TIC TAC TOE

//SELECTING DOM elemets
//Select the form
let form = document.getElementById('formPlayers');

//select input texts inside the form and accept player name values
let player1name = document.getElementById('player1').value;
let player2name = document.getElementById('player2').value;

//select All the boxes in the gameboard/canvas
let boxes = document.querySelectorAll('[data-box]');
//change the 'boxes' (which is collection ) to array, so it can be easy to manipulate
let allBoxes = Array.from(boxes);

//ADD EVENT LISTENERS
//Add Event Listeners to form when it is submited
form.addEventListener('submit', createPlayers);

//Add Event Listeners to each box/cell when clicked,, by iterating each items
boxes.forEach(box=>{
    box.addEventListener
}


//Create Array to store the Markers of the players to boxes
let gameboard = Array(9).fill(null); //fill(null) is to mark it is initally have no value
//Create Array to store winning combination of the moves
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
//Gameboard object
const Gameboard = {

    boxes: allBoxes,
}

//Create Constractors for Players
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}
function createPlayers(e){
   
    //create Player objects using input recieved from user
    const defaultPlayer = new Player(player1name, 'X');
    const player2 = new Player(player2name, 'O');

}
/*
//GAME LOGICS
//Start the game immediatly when the player adds both players
function startGame(e) {
    //prevent the form from being submited
    e.preventDefault();

    //keep track of which box clicked
    //Add event listener to each box to listen to click event when Game starts
    allBoxes.forEach(box => box.addEventListener('click', boxClicked));
}

//function boxClicked
function boxClicked(e) {
    //Make sure the user enters both names of player before start playing
    if (player1name === '' || player2name === '') {
        alert(`please enter players name first, and click add player button`);
    } else {
        //create Player objects using input recieved from user
        const defaultPlayer = new Player(player1name, 'X');
        const player2 = new Player(player2name, 'O');
        const currentPlayer =defaultPlayer;

        //capture the clicked box's div id and store it on variable
        //console.log(e.target);
        const id = e.target.id;

        //check if the clicked box was marked and have value in the array already
        //if not add current players marker to that post
        if (!gameboard[id]) {
            gameboard[id] = currentPlayer.marker;
            
            //then  mark the box with the players tag
            e.target.innerText = currentPlayer.marker;
            
            //Since the game is played b/n to players we need to alterante 
            // between the  defaultPlayer and Player2
           
            currentPlayer=player2.marker;
            //turnery operator  is used, and the result is asigned to varaible
            //xPlayer = xPlayer == xText ? oText : xText;

        }
    }
}

function gameOver(winningPlayer) {
    console.log('Congragulations!');
    console.log(winningPlayer.name + "is winner!");

}


*/
//Restart function
function restart(e) {
    //clear the canvas as well as fill the moves array with null values
    moves.fill(null);
    allBoxes.forEach(box => {
        box.innerText = ' ';
    });
    //reset the tag to the deafult player which is xplayer;
    xPlayer = xText;
}



