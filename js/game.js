import { renderGameHeader } from './game_header';
import { renderGameBoard } from './game_board';
import { renderGameStats } from './game_stats';
import { renderWinner } from './winner';

let gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 1 = x  2 = o
let turnPlayer = true;
let gameOver = false;
let stats = [0, 0, 0];
let gameMode;
let symbol;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWin = (player) => {
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return gameBoard[a] === player && gameBoard[b] === player && gameBoard[c] === player;
    });
}

const checkTie = () => {
    return gameBoard.every(cell => cell !== 0);
}

const handlePlayerTurn = (index) => {

    if (gameBoard[index] !== 0 || gameOver) return;

    gameBoard[index] = turnPlayer ? 1 : 2;

    if (checkWin(turnPlayer ? 1 : 2)) {
        gameOver = true;
        const result = turnPlayer ? 1 : 2;
        handleStats(turnPlayer);
        renderGame(result);
    } else if (checkTie()) {
        gameOver = true;
        handleStats(null);
        renderGame('tie');
    } else {
        turnPlayer = !turnPlayer;
        renderGame();
    }
}

const handleStats = (turnPlayer) => {
    if (turnPlayer === null) {
        stats[1]++;
    } else if (turnPlayer) {
        stats[0]++;
    } else {
        stats[2]++;
    }
}

export function startGame(mode, pickedSymbol) {
    gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    stats = [0, 0, 0];
    turnPlayer = true;
    gameOver = false;
    gameMode = mode;
    symbol = pickedSymbol;
    renderGame();
}

export function resetRound() {
    gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turnPlayer = true;
    gameOver = false;
    renderGame();
}

export function returnToMenu() {
    const app = document.getElementById('app');
    app.innerHTML = '';
    import('./menu.js').then(module => {
        module.renderMenu();
    });
}

export function renderGame(result = null) {
    const app = document.getElementById('app');
    app.innerHTML = '';
    let game = document.createElement('div');
    game.id = "game";

    game.appendChild(renderGameHeader(turnPlayer));
    game.appendChild(renderGameBoard(handlePlayerTurn, gameBoard));
    game.appendChild(renderGameStats(stats, gameMode, symbol));

    if (result !== null) {
        game.appendChild(renderWinner(result, gameMode, symbol));
    }

    app.appendChild(game);

    const resetButton = document.getElementById('reset-btn');
    if (resetButton) {
        resetButton.addEventListener('click', resetRound);
    }
}
