import { iconO } from './icons';
import { iconX } from './icons';

export function renderGameBoard(handlePlayerTurn, gameBoard) {
    const gameboard = document.createElement("div");
    gameboard.id = "game-board";

    gameBoard.forEach(element => {
        const cell = document.createElement("div");
        cell.classList.add("game-cell");
        cell.addEventListener("click", (index) => handlePlayerTurn(index));

        if (element === 1) {
            cell.innerHTML = iconX();
            cell.classList.add('x');
        }
        else if (element === 2) {
            cell.innerHTML = iconO();
            cell.classList.add('o');
        }

        gameboard.appendChild(cell);
    });

    return gameboard;
}