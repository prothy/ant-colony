import Ant from './actors/Ant'

class Scene extends Phaser.Scene {
    private ants: Ant[]

    private pointerPositionInfo: Phaser.GameObjects.Text

    constructor() {
        super('scene')
    }

    preload() {
        this.load.image('ant', 'assets/ant.png')
    }

    create() {
        this.pointerPositionInfo = this.add.text(10, 10, this.input.activePointer.x + ' ' + this.input.activePointer.y)
    
        this.ants = new Array(100)
        for (let i = 0; i < this.ants.length; i++) {
            this.ants[i] = new Ant(this, <number>this.game.config.width / 2, <number>this.game.config.height / 2)
        }

        console.log(this.ants)
    }

    update() {
        if (this.input.activePointer.isDown) {
            this.ants.push(new Ant(this, this.input.activePointer.x, this.input.activePointer.y))
        }
        this.ants.forEach(ant => ant.act())
        
        this.pointerPositionInfo.setText(this.input.activePointer.x + ' ' + this.input.activePointer.y)
    }
}

export default Scene