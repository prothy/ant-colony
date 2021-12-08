import Ant from './actors/Ant'

class Scene extends Phaser.Scene {
    private ants: Ant[]

    private pointerPositionInfo: Phaser.GameObjects.Text

    constructor() {
        super('scene')
        this.ants = []
    }

    preload() {
        this.load.image('ant', 'assets/ant.png')
    }

    create() {
        this.pointerPositionInfo = this.add.text(10, 10, this.input.activePointer.x + ' ' + this.input.activePointer.y)
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