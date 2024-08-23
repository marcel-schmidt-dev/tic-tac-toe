export function renderGameStats(stats) {
    const statContainer = document.createElement('div');
    statContainer.classList.add('game-stats');
    statContainer.innerHTML = /*html*/`
        <div>
            X (You)
            <span class="heading-medium">${stats[0]}</span>
        </div>
        <div>
            Ties
            <span class="heading-medium">${stats[1]}</span>
        </div>
        <div>
            O (CPU)
            <span class="heading-medium">${stats[2]}</span>
        </div>
    `
    return statContainer;
}