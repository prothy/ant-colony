import Phaser from 'phaser'

import Scene from './Scene'

const config: Phaser.Types.Core.GameConfig = {
    width: 800,
    height: 600,
    backgroundColor: '#ccc',
    scene: Scene,
    physics: {
        default: 'arcade'
    }
}

new Phaser.Game(config)