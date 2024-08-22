import { iconO } from './icons';
import { iconX } from './icons';
import { renderGameHeader } from './game_header';
import { renderGameBoard } from './game_board';
import { renderGameStats } from './game_stats';
import { render } from 'sass';

let gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let turnPlayer = true; // true = Player X, false = Player O

const handleTurnIndicator = () => {
    const turnIndicator = document.querySelector('.turn-indicator');
    turnIndicator.innerHTML = '';

    const currentIcon = turnPlayer ? iconX() : iconO();
    turnIndicator.innerHTML = `
        ${currentIcon}
        <span>Turn</span>
    `
}

const handlePlayerTurn = (index) => {
    if (gameBoard[index] !== 0) return;
    gameBoard[index] = turnPlayer ? 1 : 2;
    const cells = document.querySelectorAll('.game-cell');
    cells[index].innerHTML = turnPlayer ? iconX() : iconO();
    cells[index].classList.add(turnPlayer ? "x" : "o");

    turnPlayer = !turnPlayer;
    handleTurnIndicator();
}

const resetGame = () => {
    gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    game.remove();
    turnPlayer = true;
    renderGame();
}

export function renderGame() {
    const app = document.getElementById('app');
    let game = document.createElement('div');
    game.id = "game";

    game.appendChild(renderGameHeader());
    game.appendChild(renderGameBoard(handlePlayerTurn));
    game.appendChild(renderGameStats());

    app.appendChild(game);

    const resetButton = document.getElementById('reset-btn');
    resetButton.addEventListener('click', resetGame);
}