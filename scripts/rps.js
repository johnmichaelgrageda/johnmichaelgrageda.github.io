//----John Michael Grageda----//
//https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/
//display hidden div and rps buttons to play game
function show(hiddenDiv){
    document.getElementById("hiddenDiv").style.display = "block";
    document.getElementById("rpsImg").style.display = "none";
    document.querySelector(".rpsGame").style.display = "none";
}
//game logics and functions
const rpsGame = () =>{

    //function to play game
    const startGame = () => {
        const playerRock = document.getElementById("rock");
        const playerPaper = document.getElementById("paper");
        const playerScisors = document.getElementById("scissors");
        //set array for player choices
        const playerMove = [playerRock, playerPaper, playerScisors];
        //set array for computer choices
        const computerRPS = ["rock", "paper", "scissors"]

        //run random number generator when user clicks the buttons
        playerMove.forEach(option => {
            option.addEventListener("click",function(){
                //computer random move using array and random number generator to select array index
                const computerRandom = Math.floor(Math.random()*3);
                const computerMove = computerRPS[computerRandom];

                //call function and check result
                decider(this.innerText,computerMove)

            })
        })
    }
    //function to check result using conditional statement and display text in .result div
    const decider = (player,computer) => {
        const result = document.querySelector(".result");
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if(player === computer){
            result.textContent = "It's a tie!";
        }
        else if(player == "rock"){
            if(computer == "paper"){
                result.textContent = "CJF Mechanics Won!";
            } 
            else {
                result.textContent = "You Won!";
            }
            
        }  
        else if(player == "paper"){
            if(computer == "scissors"){
                result.textContent = "CJF Mechanics Won!";
            }
            else {
                result.textContent = "You Won!";
            }
        }  
        else if(player == "scissors"){
            if(computer == "rock"){
                result.textContent = "CJF Mechanics Won!";
            }
            else {
                result.textContent = "You Won!";
            }
        }  
    }
        //call start game function to play again
        startGame();
}
//call rps game function to play again
rpsGame();

