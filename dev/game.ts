import { UI } from "./ui.js";
import { Player } from "./player.js";

class Game {
    private player : Player;
    private ui : UI;

    constructor(){
        this.ui = new UI();
        this.player = new Player();
    }    
}

new Game()