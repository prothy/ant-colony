import AntScene from '../AntScene'
import Ant from './Ant'

/**
 * Creates a scent for ants to follow the food. They're small circles that with a set intensity that degrades over time.
 */
class Scent extends Phaser.GameObjects.Ellipse {
    private MAX_INTENSITY: integer
    private intensity: integer

    public direction: number
    public searchingFood: boolean
    public ant: Ant

    constructor(ant: Ant) {
        super(ant.scene, ant.x, ant.y, 3, 3, ant.searchingFood ? 0xff0000 : 0xffff00)

        this.ant = ant
        this.direction = ant.rotation
        this.searchingFood = ant.searchingFood

        this.smoothness = 8 // decrease object smoothness for performance

        this.MAX_INTENSITY = ant.scents.length
        this.intensity = this.MAX_INTENSITY

        ant.scene.add.existing(this)
        ant.scene.physics.add.existing(this)
    }

    public act(): void {
        this.degrade()
        if (!this.searchingFood) this.checkCollision()
    }

    private degrade(): void {
        this.intensity--
        // this.setAlpha(Math.log10(this.MAX_INTENSITY - this.intensity) + 1)

        if (this.intensity === 0) {
            this.destroy()
        }
    }

    private checkCollision(): void {
        this.ant.scene.physics.collide(this, this.ant.scene.ants, (scentBody, antBody) => {
            const scent = scentBody.body.gameObject as Scent
            const ant = antBody.body.gameObject as Ant

            ant.adjacentScents.push(scent)
        })
    }
}

export default Scent