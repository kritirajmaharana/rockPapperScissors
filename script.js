let theArray = ['rock', 'paper', 'scissors'];

function getComputerChoice(choices) {
    let res = choices[Math.floor(Math.random() * choices.length)];
    return res;
}

function getPlayerChoice() {
    var pchoice = prompt("Enter your choice: Rock, Paper, or Scissors");
    return pchoice.toLowerCase();
}


var Computer=0;
var player=0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        player +=1;
        Computer += 1;
        return `This game is a tie -- Yours: ${playerSelection}  Computer: ${computerSelection}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        player += 1;
        return `You won the match -- Yours: ${playerSelection}  Computer: ${computerSelection}`;
    } else {
        Computer +=1;
        return `You lost the match -- Yours: ${playerSelection}  Computer: ${computerSelection}`;
    }
}
for(var i=0; i<5 ; i++){
    playRound(getPlayerChoice(), getComputerChoice(theArray));
}
if(Computer === player){
    console.log(`Finally Match is tie ---Computer=${Computer} and Player=${player}`)
}else if(Computer > player){
    console.log(`Finally Computer Own the match ---Computer=${Computer} and Player=${player}`)
}else{
    console.log(`Finally You Own the match ---Computer=${Computer} and Player=${player}`)
}