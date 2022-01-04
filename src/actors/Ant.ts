import AntScene from '../AntScene'
import Scent from './Scent'


/**
 * An Ant object, which will spawn when its constructor is called.
 */
class Ant extends Phaser.GameObjects.Sprite {
    private distance = 2

    public searchingFood: boolean

    public scents: Scent[]
    public adjacentScents: Scent[]
    private scentIndex: integer

    public scene: AntScene

    constructor(scene: AntScene, x: number, y: number) {
        super(scene, x, y, 'ant')
        this.scene = scene
        this.rotation = Math.random() * 2 * Math.PI
        this.depth = 1

        this.scents = new Array(20)
        this.adjacentScents = []
        this.scentIndex = 0
        
        this.searchingFood = true

        scene.add.existing(this)
        scene.physics.add.existing(this)
    }

    private isOutOfBounds(): boolean {
        const width = this.scene.sys.canvas.getBoundingClientRect().width
        const height = this.scene.sys.canvas.getBoundingClientRect().height

        return this.x < 0 || this.x > width || this.y < 0 || this.y > height
    }

    private move(): void {
        if (this.adjacentScents.length) this.rotation = this.adjacentScents.map(scent => -scent.direction).reduce((prev, cur) => prev * cur / 2) * this.rotation / 2

        this.x += this.distance * Math.cos(this.rotation)
        this.y += this.distance * Math.sin(this.rotation)
    }

    public act(frameIndex: integer): void {
        const randomRotation = (Math.random() - 0.5)/4

        this.isOutOfBounds() ? this.rotation -= Math.PI : this.rotation += randomRotation

        this.adjacentScents = this.adjacentScents.filter(scent => this.scene.physics.collide(this, scent))
        this.move()

        const SCENT_SPAWN_FREQUENCY = 10

        if (frameIndex % SCENT_SPAWN_FREQUENCY === 0) {
            this.scents[this.scentIndex] = new Scent(this)
            this.scentIndex = (this.scentIndex + 1) % this.scents.length
            this.scents.forEach(scent => scent.act())
        }
    }

}

export default Ant