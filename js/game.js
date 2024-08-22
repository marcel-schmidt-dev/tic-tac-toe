import { iconO } from './icons';
import { iconX } from './icons';
import { renderGameHeader } from './game_header';
import { renderGameBoard } from './game_board';
import { renderGameStats } from './game_stats';

export function renderGame() {
    const app = document.getElementById('app');
    let game = document.createElement('div');
    game.id = "game";
    game.innerHTML = /*html*/`
        ${renderGameHeader()}
        ${renderGameBoard()}
        ${renderGameStats()}
    `

    app.appendChild(game);
}