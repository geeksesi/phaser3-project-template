import 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0xffffff,
    scene: [main_menu,play_game]
};

let game = new Phaser.Game(config);

import main_menu from './main_menu.js';
import play_game from './play_game.js';
