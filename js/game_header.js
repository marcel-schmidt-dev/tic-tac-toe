import logo from '../assets/logo.svg';
import reset from '../assets/icon-restart.svg';
import { iconX } from './icons';

export function renderGameHeader() {
    return /*html*/`    
    <div class="header">
        <div>
            <img src="${logo}" />
        </div>
        <div>
            <div>
                ${iconX()}
                <span>Turn</span>
            </div>
        </div>
        <div>
            <button><img class="heading-extra-small" src="${reset}" /></button>
        </div>
    </div>`
}