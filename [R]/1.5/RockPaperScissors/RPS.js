let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

renderScore();

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r' || event.key === 'R') {
        playGame('rock');
    } else if (event.key === 'p' || event.key === 'P') {
        playGame('paper');
    } else if (event.key === 's' || event.key === 'S') {
        playGame('scissors');
    }
});

document.querySelectorAll('.move__btn')
    .forEach(button => {
        button.addEventListener('click', () => {
            const playerMove = playersPick(button);
            playGame(playerMove);
        });
    });

document.querySelector('.clear__btn')
    .addEventListener('click', () => {
        score = {wins: 0, losses: 0, ties: 0};
        saveToStorage();
        renderScore();
    });

function playGame(playerMove) {
    const result = getResult(playerMove);
    
    if (result === 'Tie.') { score.ties++; }
    if (result === 'You win!') { score.wins++; }
    if (result === 'You lose!') { score.losses++; }

    renderScore();
    saveToStorage();

    document.querySelector('.result__of__battle').textContent = getResult();
    document.querySelector('.choice__of__two').textContent = `Computer picked: ${computerPick()} --- You picked: ${playerMove}`;
}

function renderScore() {
    document.querySelector('.score').textContent = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function getResult(playerMove) {

    if (playerMove === computerPick()) { return 'Tie.'}

    else if (playerMove === 'rock') {return computerPick() === 'scissors' ? 'You win!' : 'You lose!'}
    else if (playerMove === 'paper') {return computerPick() === 'rock' ? 'You win!' : 'You lose!'}
    else {return computerPick() === 'paper' ? 'You win!' : 'You lose!'}

};

function computerPick() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3) { return 'rock'; }
    else if (randomNumber >= 1/3 && randomNumber < 2/3) { return 'paper';}
    return 'scissors';

}

function playersPick(button) {

    if (button.classList.contains('rock')) {
        return 'rock';
    } 

    if (button.classList.contains('paper')) {
        return 'paper';
    }

    return 'scissors';
}

function saveToStorage() {
    localStorage.setItem('score', JSON.stringify(score));
}