//John
//https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/
//display hidden div and rps buttons to play game
function show(hiddenDiv){
    document.getElementById("hiddenDiv").style.display = "block";
    document.getElementById("rpsImg").style.display = "none";
    document.querySelector(".rpsGame").style.display = "none";
}
//game logics and functions
const rpsGame = () =>{


    const startGame = () => {
        const playerRock = document.getElementById("rock");
        const playerPaper = document.getElementById("paper");
        const playerScisors = document.getElementById("scissors");
        //set array for player choices
        const playerMove = [playerRock, playerPaper, playerScisors];
        //set array for computer choices
        const computerRPS = ["rock", "paper", "scissors"]


        playerMove.forEach(option => {
            option.addEventListener("click",function(){
                //computer randon move using array
                const computerRandom = Math.floor(Math.random()*3);
                const computerMove = computerRPS[computerRandom];

                //check result
                decider(this.innerText,computerMove)

            })
        })
    }
    //compare choices and display message 
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

        startGame();
}
rpsGame();

