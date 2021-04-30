export class Player {
    private element : HTMLElement;
    private posX : number;
    private posY : number;
    private game : HTMLElement;

    constructor() {
        this.game = document.querySelector('game') as HTMLElement;

        this.posX = 200;
        this.posY = 200;

        this.spawn();
    }

    public spawn(): void {
        this.element = document.createElement('player');
        this.game.appendChild(this.element)

        this.update();
    }

    public update(): void {
        this.element.style.transform = `translate(${this.posX}px, ${this.posY}px)`
    }

    public kill(): void {

    }

}