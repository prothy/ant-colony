import Phaser from 'phaser'

import AntScene from './AntScene'

const config: Phaser.Types.Core.GameConfig = {
    width: 800,
    height: 600,
    backgroundColor: '#ccc',
    scene: AntScene,
    physics: {
        default: 'arcade'
    }
}

new Phaser.Game(config)