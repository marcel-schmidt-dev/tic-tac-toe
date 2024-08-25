import { renderGameHeader } from './game_header';
import { renderGameBoard } from './game_board';
import { renderGameStats } from './game_stats';
import { renderWinner } from './winner';
import { renderMenu } from './menu';

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
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] === player && gameBoard[b] === player && gameBoard[c] === player) {
            return combination;
        }
    }
    return null;
}

const checkTie = () => {
    return gameBoard.every(cell => cell !== 0);
}

const handlePlayerTurn = (index) => {
    if (gameBoard[index] !== 0 || gameOver) return;

    gameBoard[index] = turnPlayer ? 1 : 2;

    const winningCombo = checkWin(turnPlayer ? 1 : 2);
    if (winningCombo) {
        gameOver = true;
        const result = turnPlayer ? 1 : 2;
        handleStats(turnPlayer);
        renderGame(result, winningCombo);
    } else if (checkTie()) {
        gameOver = true;
        handleStats(null);
        renderGame('tie');
    } else {
        turnPlayer = !turnPlayer;
        renderGame();

        if (gameMode === 'cpu' && !turnPlayer) {
            setTimeout(cpuMove, 500);
        }
    }
}

const cpuMove = () => {
    const cpu = 2;
    const player = 1;

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (gameBoard[a] === cpu && gameBoard[b] === cpu && gameBoard[c] === 0) {
            return handlePlayerTurn(c);
        }
        if (gameBoard[a] === cpu && gameBoard[c] === cpu && gameBoard[b] === 0) {
            return handlePlayerTurn(b);
        }
        if (gameBoard[b] === cpu && gameBoard[c] === cpu && gameBoard[a] === 0) {
            return handlePlayerTurn(a);
        }
    }

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (gameBoard[a] === player && gameBoard[b] === player && gameBoard[c] === 0) {
            return handlePlayerTurn(c);
        }
        if (gameBoard[a] === player && gameBoard[c] === player && gameBoard[b] === 0) {
            return handlePlayerTurn(b);
        }
        if (gameBoard[b] === player && gameBoard[c] === player && gameBoard[a] === 0) {
            return handlePlayerTurn(a);
        }
    }

    let emptyCells = [];
    gameBoard.forEach((cell, index) => {
        if (cell === 0) {
            emptyCells.push(index);
        }
    });

    if (emptyCells.length === 0) return;

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const cpuChoice = emptyCells[randomIndex];

    handlePlayerTurn(cpuChoice);
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
    renderMenu();
}

export function renderGame(result = null, winningCombo = []) {
    const app = document.getElementById('app');
    app.innerHTML = '';
    let game = document.createElement('div');
    game.id = "game";

    game.appendChild(renderGameHeader(turnPlayer));
    game.appendChild(renderGameBoard(handlePlayerTurn, gameBoard, winningCombo, result, turnPlayer));
    game.appendChild(renderGameStats(stats, gameMode, symbol));

    if (result !== null) {
        setTimeout(() => {
            game.appendChild(renderWinner(result, gameMode, symbol));
        }, 1000);
    }

    app.appendChild(game);

    const resetButton = document.getElementById('reset-btn');
    if (resetButton) {
        resetButton.addEventListener('click', resetRound);
    }
}
