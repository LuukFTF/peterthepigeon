export class UI {
    constructor() {
        this.game = document.querySelector('game');
        this.text = `Score: 1337`;
        this.init();
    }
    init() {
        this.textField = document.createElement('ui');
        this.game.appendChild(this.textField);
        this.update();
    }
    update() {
        this.textField.innerHTML = this.text;
    }
    kill() {
    }
}
//# sourceMappingURL=ui.js.map