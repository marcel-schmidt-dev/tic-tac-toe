export function renderGameBoard(handlePlayerTurn) {
    const gameboard = document.createElement("div");
    gameboard.id = "game-board";

    for (let index = 0; index < 9; index++) {
        const cell = document.createElement("div");
        cell.classList.add("game-cell");
        cell.addEventListener("click", () => handlePlayerTurn(index));
        gameboard.appendChild(cell);
    }

    return gameboard;
}