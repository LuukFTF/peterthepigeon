export class Player {
    constructor() {
        this.game = document.querySelector('game');
        this.posX = 200;
        this.posY = 200;
        this.spawn();
    }
    spawn() {
        this.element = document.createElement('player');
        this.game.appendChild(this.element);
        this.update();
    }
    update() {
        this.element.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
    }
    kill() {
    }
}
//# sourceMappingURL=player.js.map