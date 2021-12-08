import Scent from './Scent'

/**
 * Path of Scent objects intended to be saved individually for each Ant
 */
class ScentPath {
    private path: Array<Scent>
    private scene: Phaser.Scene

    constructor(scene: Phaser.Scene) {
        this.scene = scene
        this.path = []
    }

    public append(x: number, y: number, rotation: number): void {
        this.path.push(new Scent(this.scene, x, y, rotation))
    }

    public setActive(bool: boolean): void {
        this.path.forEach(scent => {
            scent.setFoodFound(bool)

            const PATH_COLOR = bool ? 0xffff00 : 0xff0000
            scent.setFillStyle(PATH_COLOR)
        })
    }

}

export default ScentPath