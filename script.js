let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-box");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}

const drawGame = () => {
    msg.innerText = "GAME WAS DRAW"
    msg.classList.add("draw")
    msg.classList.remove("won")
    msg.classList.remove("lose")
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "YOU WON!"
        msg.classList.add("won")
        msg.classList.remove("lose")
        msg.classList.remove("draw")
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "YOU LOSE!"
        msg.classList.add("lose")
        msg.classList.remove("won")
        msg.classList.remove("draw")
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false:true;
        } 
        else{
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});