import logo from '../assets/logo.svg';
import reset from '../assets/icon-restart.svg';
import { iconX } from './icons';

export function renderGameHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const logoContainer = document.createElement('div');
    const logoImg = document.createElement('img');
    logoImg.src = logo;
    logoImg.alt = 'Game Logo';
    logoImg.classList.add('logo');
    logoContainer.appendChild(logoImg);

    const turnIndicator = document.createElement('div');
    turnIndicator.classList.add('turn-indicator');
    turnIndicator.innerHTML = `${iconX()} <span>Turn</span>`;

    const resetButtonContainer = document.createElement('div');
    const resetButton = document.createElement('button');
    resetButton.id = 'reset-btn';
    const resetImg = document.createElement('img');
    resetImg.classList.add('icon-small');
    resetImg.src = reset;
    resetImg.alt = 'Reset Game';
    resetButton.appendChild(resetImg);
    resetButtonContainer.appendChild(resetButton);

    header.appendChild(logoContainer);
    header.appendChild(turnIndicator);
    header.appendChild(resetButtonContainer);

    return header;
}