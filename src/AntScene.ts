import Ant from './actors/Ant'
import Food from './actors/Food'

class AntScene extends Phaser.Scene {
    public ants: Ant[]
    private foods: Food[]

    private pointerPositionInfo: Phaser.GameObjects.Text

    public width: number
    public height: number

    public frameIndex: integer

    constructor() {
        super('scene')
        this.frameIndex = 0
    }

    preload() {
        this.load.image('ant', 'assets/ant.png')

        this.width = <number>this.game.config.width
        this.height = <number>this.game.config.height
    }

    create() {
        this.pointerPositionInfo = this.add.text(10, 10, this.input.activePointer.x + ' ' + this.input.activePointer.y)

        this.ants = new Array(100)
        for (let i = 0; i < this.ants.length; i++) {
            this.ants[i] = new Ant(this, this.width / 2, this.height / 2)
        }

        this.foods = new Array(10)
        let foodPosX, foodPosY
        for (let i = 0; i < this.foods.length; i++) {
            foodPosX = Math.random() * this.width
            foodPosY = Math.random() * this.height

            this.foods[i] = new Food(this, foodPosX, foodPosY)
        }

        console.log(this.physics.world.bodies)

        console.log(this.physics)
    }

    update() {
        this.frameIndex > 1000 ? this.frameIndex = 0 : this.frameIndex++
        
        this.ants.forEach((ant) => {
            this.checkCollision(ant)
            ant.act(this.frameIndex)
        })
        
        this.pointerPositionInfo.setText(this.input.activePointer.x + ' ' + this.input.activePointer.y)
    }

    private checkCollision(ant: Ant): void {
        if (this.physics.overlap(ant, this.foods) && ant.searchingFood) {
            ant.searchingFood = false
            ant.rotation -= Math.PI
        }
    }
}

export default AntScene