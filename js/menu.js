import { iconO, iconX } from './icons';
import logo from '../assets/logo.svg';
import { startGame } from './game';

export function renderMenu() {
    const app = document.getElementById('app');
    let pickedSymbol = false;
    let menu = document.createElement('div');
    menu.id = 'menu';

    const handlePick = () => {
        pickedSymbol = !pickedSymbol;
    };

    const handleGameMode = (e) => {
        if (e.target.id === 'new-game-cpu') {
            startGame('cpu', pickedSymbol);
        } else {
            startGame('player', pickedSymbol);
        }
    }

    menu.innerHTML = /*html*/ `
        <img class="logo" src="${logo}" alt="logo" />
        <div class="pick-container">
            <span class="heading-extra-small">Pick Player 1's mark</span>
            <label class="pick-player">
                <input type="checkbox">
                <span class="slider"></span>
                <div class="icons">
                    ${iconX()}
                    ${iconO()}
                </div>
            </label>
            <span>Remember: X goes first</span>
        </div>
        <button id="new-game-cpu" class="heading-small">New Game (vs cpu)</button>
        <button id="new-game-player" class="heading-small">New Game (vs player)</button>
    `;

    app.appendChild(menu);

    menu.querySelector('.pick-player input').addEventListener('click', handlePick);
    menu.querySelector('#new-game-cpu').addEventListener('click', handleGameMode);
    menu.querySelector('#new-game-player').addEventListener('click', handleGameMode);
}
