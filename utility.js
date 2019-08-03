import {CHOICES } from './Const'
const randomComputerChoice = () =>
    CHOICES[Math.floor(Math.random() * CHOICES.length)];
const getRoundOutcome = (userChoice, computerChoice) => {
    let result;

    if (userChoice === 'rock') {
        result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'paper') {
        result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'scissors') {
        result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
    }

    if (userChoice === computerChoice) result = 'Tie game!';
    return result;
};
function updateScore(totalPlayed, win, loose) {
    let tie = totalPlayed - win - loose;
    let percentWin = win / totalPlayed * 100;
    let percentLoose = loose / totalPlayed * 100;
    let percentTie = tie / totalPlayed * 100;
    this.setState(
        {
            tie: tie,
            percentW: percentWin,
            percentL: percentLoose,
            percentT: percentTie,
        }
    );
    //return [tie, percentWin, percentLoose, percentTie];
}
export { randomComputerChoice, getRoundOutcome, updateScore}