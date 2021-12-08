import ScentPath from './ScentPath'

/**
 * An Ant object, which will spawn when its constructor is called.
 */
class Ant extends Phaser.GameObjects.Sprite {
    private distance = 2

    public scentPath: ScentPath

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'ant')
        this.scene = scene
        this.rotation = Math.random() * 2 * Math.PI
        this.depth = 1

        this.scentPath = new ScentPath(this.scene)

        scene.add.existing(this)
    }

    private isOutOfBounds(): boolean {
        const width = this.scene.sys.canvas.getBoundingClientRect().width
        const height = this.scene.sys.canvas.getBoundingClientRect().height

        return this.x < 0 || this.x > width || this.y < 0 || this.y > height
    }

    public act(frameIndex: integer): void {
        const randomRotation = (Math.random() - 0.5)/4

        this.isOutOfBounds() ? this.rotation -= Math.PI : this.rotation += randomRotation

        this.x += this.distance * Math.cos(this.rotation)
        this.y += this.distance * Math.sin(this.rotation)

        const SCENT_SPAWN_FREQUENCY = 10

        // wip: frameIndex as property does not exist??
        // this.scene.frameIndex
        if (((frameIndex / 10) * 10) % SCENT_SPAWN_FREQUENCY === 0) {
            this.scentPath.append(this.x, this.y, this.rotation)
        }
    }

}

export default Ant