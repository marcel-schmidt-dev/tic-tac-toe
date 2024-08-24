export function renderGameStats(stats, pickedSymbol, mode) {
    const statContainer = document.createElement('div');
    statContainer.id = 'game-stats';
    statContainer.innerHTML = /*html*/`
        <div>
            X (${pickedSymbol ? 'p1' : mode === 'cpu' ? 'cpu' : 'p2'})
            <span class="heading-medium">${stats[0]}</span>
        </div>
        <div>
            Ties
            <span class="heading-medium">${stats[1]}</span>
        </div>
        <div>
            O (${!pickedSymbol ? 'p1' : mode === 'cpu' ? 'cpu' : 'p2'})
            <span class="heading-medium">${stats[2]}</span>
        </div>
    `
    return statContainer;
}