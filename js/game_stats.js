export function renderGameStats() {
    const stats = document.createElement('div');
    stats.classList.add('game-stats');
    stats.innerHTML = /*html*/`
        <div>
            X (You)
            <span class="heading-medium">0</span>
        </div>
        <div>
            Ties
            <span class="heading-medium">0</span>
        </div>
        <div>
            O (CPU)
            <span class="heading-medium">0</span>
        </div>
    `
    return stats;
}