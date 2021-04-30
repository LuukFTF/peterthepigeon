export class UI {

    private textField : HTMLElement;
    private text : string;
    private game : HTMLElement;

    constructor() {
        this.game = document.querySelector('game') as HTMLElement;

        this.text = `Score: 1337`;

        this.init();
    }

    public init(): void {
        this.textField = document.createElement('ui');
        this.game.appendChild(this.textField);

        this.update();
    }

    public update(): void {
        this.textField.innerHTML = this.text;
    }

    public kill(): void {

    }


}