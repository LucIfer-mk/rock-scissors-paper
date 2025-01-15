const choices = ["rock","paper","scissors"];
const displayReasult= document.getElementById("yourReasult");
const you = document.getElementById("computerScore");
const computer = document.getElementById("yourScore");
const timess =document.getElementById("totalplay");
let computerScore = 0;
let yourScore = 0;
let totalplay = 0;
let reasult = "";
const winAudio = new Audio("./assets/win.mp3");
const drawAudio = new Audio ("./assets/draw.mp3");
const looseAudio = new Audio("./assets/loose.mp3");
function playAs(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
        if(computerChoice === playerChoice){
            reasult = "Its A Draw 🙂‍↔️";
            totalplay++
            drawAudio.play();
        }
        else if(playerChoice==="rock" && computerChoice==="paper" || playerChoice === "paper" && computerChoice==="scissors" || playerChoice==="scissors" && computerChoice ==="rock" ){
            reasult = "You Loose😭";
            computerScore++;
            totalplay++
            looseAudio.play();
        }
        else{
            reasult = "You Win 😄"
                yourScore++;
                totalplay++
                winAudio.play();
        }
        displayReasult.textContent=`${reasult}`;
        you.textContent =`Your score: ${yourScore}`
        computer.textContent =`Computer Score:${computerScore}`
        timess.textContent =`Total Play: ${totalplay}`
    }