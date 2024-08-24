import { renderGameHeader } from './game_header';
import { renderGameBoard } from './game_board';
import { renderGameStats } from './game_stats';

let gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let turnPlayer = true;
let gameOver = false;
let stats = [0, 0, 0];

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

const handlePlayerTurn = (event) => {
    const index = Array.prototype.indexOf.call(event.target.parentElement.children, event.target);

    if (gameBoard[index] !== 0 || gameOver) return;

    gameBoard[index] = turnPlayer ? 1 : 2;

    if (checkWin(turnPlayer ? 1 : 2)) {
        alert(`Player ${turnPlayer ? 'X' : 'O'} wins!`);
        handleStats(turnPlayer);
        gameOver = true;
    } else if (checkTie()) {
        alert("It's a tie!");
        handleStats(null);
        gameOver = true;
    }

    turnPlayer = !turnPlayer;
    game.remove();
    renderGame();
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

const resetGame = () => {
    gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turnPlayer = true;
    gameOver = false;
    game.remove();
    renderGame();
}

export function renderGame(mode, pickedSymbol) {
    const app = document.getElementById('app');
    app.innerHTML = '';
    let game = document.createElement('div');
    game.id = "game";

    game.appendChild(renderGameHeader(turnPlayer));
    game.appendChild(renderGameBoard(handlePlayerTurn, gameBoard, turnPlayer));
    game.appendChild(renderGameStats(stats, pickedSymbol, mode));

    app.appendChild(game);

    const resetButton = document.getElementById('reset-btn');
    resetButton.addEventListener('click', resetGame);
}