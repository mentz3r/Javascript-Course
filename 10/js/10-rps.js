let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    const result = getResult(playerMove, computerMove);

    if (result === 'You win.') {
        score.wins += 1
    } else if (result === 'You lose.') {
        score.losses += 1
    } else {
        score.ties += 1
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You <img src="/10/images/${playerMove}-emoji.png" class="move-icon"> - <img src="/10/images/${computerMove}-emoji.png" class="move-icon"> Computer`;

}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

function getResult(playerMove, computerMove) {

    let result = '';

    if (playerMove === computerMove) { result = 'Tie.' }
    else {
        if (playerMove === 'rock') { result = (computerMove === 'paper') ? 'You lose.' : 'You win.'; }
        else if (playerMove === 'paper') { result = (computerMove === 'rock') ? 'You win.' : 'You lose.'; }
        else if (playerMove === 'scissors') { result = (computerMove === 'rock') ? 'You lose.' : 'You win.'; }
    }

    return result;
}