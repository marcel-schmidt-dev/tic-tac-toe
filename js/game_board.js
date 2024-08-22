export function renderGameBoard() {
    const gameboard = document.createElement("div");
    gameboard.id = "game-board"

    for (let index = 0; index < 9; index++) {
        gameboard.innerHTML += '<div class="game-cell"></div>'
    }

    return gameboard.outerHTML;
}