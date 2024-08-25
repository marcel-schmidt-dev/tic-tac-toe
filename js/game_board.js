import { iconO, iconX } from './icons';

export function renderGameBoard(handlePlayerTurn, gameBoard, winningCombo = [], result = null, turnPlayer) {
    const gameboard = document.createElement("div");
    gameboard.id = "game-board";
    if (turnPlayer) {
        gameboard.classList.add('x');
    }
    else {
        gameboard.classList.add('o');
    }

    gameBoard.forEach((element, index) => {
        const cell = document.createElement("div");
        cell.classList.add("game-cell");
        cell.addEventListener("click", () => handlePlayerTurn(index));


        if (element === 1) {
            cell.innerHTML = iconX();
            cell.classList.add('x');
        } else if (element === 2) {
            cell.innerHTML = iconO();
            cell.classList.add('o');
        }

        if (winningCombo.includes(index)) {
            if (result === 1) {
                cell.classList.add('win-x');
            } else if (result === 2) {
                cell.classList.add('win-o');
            }
        }

        gameboard.appendChild(cell);
    });

    return gameboard;
}
