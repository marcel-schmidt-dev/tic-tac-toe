import { iconO } from './icons';
import { iconX } from './icons';
import logo from '../assets/logo.svg'

export function renderMenu() {
    const app = document.getElementById('app');
    let menu = document.createElement('div');
    menu.id = "menu";

    menu.innerHTML = /*html*/`
        <img class="logo" src=${logo} alt="logo" />
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
        <button class="heading-small">New Game (vs cpu)</button>
        <button class="heading-small">New Game (vs player)</button>
    `

    app.appendChild(menu);
}