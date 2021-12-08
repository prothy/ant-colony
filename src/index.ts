import Phaser from 'phaser'

import Scene from './Scene'

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#ccc',
    scene: Scene
}

console.log('asdf')

new Phaser.Game(config)