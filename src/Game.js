import 'pixi';
import 'p2';
import Phaser from 'phaser-ce';

import BootState from './states/Boot';
import SplashState from './states/Splash';
import GameState from './states/Game';
import GameOverState from './states/GameOver';
import GameOverBState from './states/GameOverB';
import HauptmenueState from './states/Hauptmenue';
import Level1State from './states/Level1';
import Level2State from './states/Level2';


class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement;
    const width = window.innerWidth;
    const height = window.innerHeight;

    super(width, height, Phaser.CANVAS, 'content', null);
    
    this.state.add('Boot', BootState, false);
    this.state.add('Splash', SplashState, false);
    this.state.add('Game', GameState, false);
    this.state.add('GameOver', GameOverState, false);
    this.state.add('GameOverB', GameOverBState, false);
    this.state.add('Hauptmenue', HauptmenueState, false);
    this.state.add('Level1', Level1State, false);
    this.state.add('Level2', Level2State, false);

    this.state.start('Boot');
  }

  resize() {    
    this.scale.setGameSize(window.innerWidth, window.innerHeight);
    this.state.resize(window.innerWidth, window.innerHeight);
  }
}



const game = new Game();

window.game = game;
window.addEventListener("resize",() => game.resize() );
