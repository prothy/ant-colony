import Ant from './actors/Ant'

class Scene extends Phaser.Scene {
    private ant: Ant

    constructor() {
        super('scene')
    }

    preload() {
        this.load.image('ant', 'assets/ant.png')
    }

    create() {
        this.ant = new Ant(this, this.cameras.main.centerX, 10)
        
    }

    update() {
        this.ant.act()
    }
}

export default Scene