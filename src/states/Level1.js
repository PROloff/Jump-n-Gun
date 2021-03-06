import Phaser from 'phaser-ce';
import Weapon from '../sprites/Weapon';
import Player2 from '../sprites/Player2';

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');

    this.load.setPreloadSprite(this.loaderBar);
    //
    // load your assets
    //
    this.load.image('bulletR', 'assets/images/bulletRot.png');
    this.load.image('bulletB', 'assets/images/bulletBlau.png');
    this.load.spritesheet('dude','assets/images/dudeRot_klein.png', 64, 64);
    this.load.image('background', 'assets/images/stadt3.jpg');
    this.load.tilemap('map', 'assets/map/Level-Retro.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('Tileset1', 'assets/map/retro.png')
    this.load.spritesheet('dude2', 'assets/images/dudeGrün_klein.png', 64, 64);
    this.load.image('weapon', 'assets/images/waffe1.png');
    this.load.spritesheet('weapon2', 'assets/images/waffe2_klein.png', 32, 32);
    this.load.image ('Blue','assets/images/BlueWinsnew.png');
    this.load.image ('Red','assets/images/RedWinsnew.png');
    this.load.audio ('Laser','assets/sounds1/LASER.mp3');
    this.load.audio ('Fight','assets/sounds1/FIGHT.mp3');
    this.load.audio ('Fatality','assets/sounds1/FATALITY.mp3');
  }

  create () {
    
    this.state.start('Game');
  }
}
