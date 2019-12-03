let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let close = document.getElementById("close");
let triangleBoard = document.getElementById("triangle");
let matchBoard = document.getElementById("match-board");
let pAgain = document.getElementById("play-again");
let pAgainMobile = document.getElementById("play-again-mobile");
let resultMobile = document.getElementById("rm");

btn.onclick = () => {
    modal.style.display = "block";
}

close.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const game = () => {
    let pScore = 0;

    //Starting the game

    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.triangle button');

        const computerOptions = ['rock', 'scissors', 'paper'];



        options.forEach((option) => {
            option.addEventListener('click', function () {
                //Change Board
                triangleBoard.style.display = "none";
                matchBoard.style.display = "block";

                if (window.matchMedia("(max-width: 600px)").matches) {
                    resultMobile.style.display = "block";
                }


                //Your Choice
                const yourChoice = document.getElementById(`your${option.name}`);
                yourChoice.style.display = "block";

                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                const houseChoice = document.getElementById(`h${computerChoice}`);
                houseChoice.style.display = "block";

                //Compare Choices
                const yChoice = option.name;
                compareChoices(yChoice, computerChoice);

                pAgain.onclick = () => {
                    triangleBoard.style.display = "block";
                    matchBoard.style.display = "none";
                    yourChoice.style.display = "none";
                    houseChoice.style.display = "none";
                    resultMobile.style.display = "none";
                }

                pAgainMobile.onclick = () => {
                    triangleBoard.style.display = "block";
                    matchBoard.style.display = "none";
                    yourChoice.style.display = "none";
                    houseChoice.style.display = "none";
                    resultMobile.style.display = "none";
                }

            });
        });
    };

    //Update Score
    const updateScore = () => {
        const playerScore = document.querySelector('.count p');
        playerScore.textContent = pScore;
    }

    //Compare Choices
    const compareChoices = (yChoice, computerChoice) => {

        const winner = document.getElementById("result");
        const winnerMobile = document.getElementById("result-mobile");


        //Check for draw
        if (yChoice === computerChoice) {
            winner.innerHTML = "DRAW";
            winnerMobile.innerHTML = "DRAW";
            return;
        }

        //Check for Rock
        if (yChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.innerHTML = 'YOU WON';
                winnerMobile.innerHTML = 'YOU WON';
                pScore++;
                updateScore();
                return;
            } else {
                winner.innerHTML = 'YOU LOST';
                winnerMobile.innerHTML = 'YOU LOST';
                pScore--;
                updateScore();
                return;
            }
        }

        //Check for Paper 
        if (yChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.innerHTML = 'YOU LOST';
                winnerMobile.innerHTML = 'YOU LOST';
                pScore--;
                updateScore();
                return;
            } else {
                winner.innerHTML = 'YOU WON';
                winnerMobile.innerHTML = 'YOU WON';
                pScore++;
                updateScore();
                return;
            }
        }

        //Check for Scissors 
        if (yChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.innerHTML = 'YOU LOST';
                winnerMobile.innerHTML = 'YOU LOST';
                pScore--;
                updateScore();
                return;
            } else {
                winner.innerHTML = 'YOU WON';
                winnerMobile.innerHTML = 'YOU WON';
                pScore++;
                updateScore();
                return;
            }
        }
    }

    playMatch();
}

game();