import { iconO, iconX } from "./icons";
import { resetRound, returnToMenu } from "./game";

export function renderWinner(result, mode, pickedSymbol) {
    let winnerContainer = document.createElement('div');
    winnerContainer.id = "winner";

    let smallMessage;
    let className;
    let winnerIcon;
    let bigMessage = 'Takes the Round';

    if (result === 1 && pickedSymbol) {
        smallMessage = mode === 'cpu'
            ? `You won!`
            : `Player 1 wins!`;
        className = pickedSymbol ? 'x' : 'o';
        winnerIcon = pickedSymbol ? iconX() : iconO();
    } else if (result === 1 && !pickedSymbol) {
        smallMessage = mode === 'cpu'
            ? `Oh no, you lost...`
            : `Player ${pickedSymbol ? '1' : '2'} wins!`;
        className = pickedSymbol ? 'o' : 'x';
        winnerIcon = pickedSymbol ? iconO() : iconX();
    } else if (result === 2 && !pickedSymbol) {
        smallMessage = mode === 'cpu'
            ? `You won!`
            : `Player ${pickedSymbol ? '2' : '1'} wins!`;
        className = !pickedSymbol ? 'o' : 'x';
        winnerIcon = !pickedSymbol ? iconO() : iconX();
    } else if (result === 2 && pickedSymbol) {
        smallMessage = mode === 'cpu'
            ? `Oh no, you lost..`
            : `Player ${pickedSymbol ? '2' : '1'} wins!`;
        className = !pickedSymbol ? 'x' : 'o';
        winnerIcon = !pickedSymbol ? iconO() : iconX();
    }

    else if (result === 'tie') {
        smallMessage = '';
        className = 'tie';
        winnerIcon = '';
        bigMessage = 'Round Tied';
    }

    winnerContainer.innerHTML = /*html*/`
        <div class="inner-winner">
            <span class="heading-extra-small">${smallMessage}</span>
            <div class="${className}">
                ${winnerIcon} 
                <span class="heading-large">${bigMessage}</span>
            </div>
            <div>
                <button id="quit-btn" class="heading-extra-small">Quit</button>
                <button id="restart-btn" class="heading-extra-small">Next Round</button>
            </div>
        </div>
    `;

    winnerContainer.querySelector('#quit-btn').addEventListener('click', returnToMenu);
    winnerContainer.querySelector('#restart-btn').addEventListener('click', resetRound);

    return winnerContainer;
}
