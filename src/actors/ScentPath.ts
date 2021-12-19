import Scent from './Scent'

/**
 * Path of Scent objects intended to be saved individually for each Ant
 */
class ScentPath {
    private trail: Array<Scent> // general trail of ant
    public activeTrail: Array<Scent> // active trail
    private scene: Phaser.Scene

    constructor(scene: Phaser.Scene) {
        this.scene = scene
        this.trail = []
        this.activeTrail = []
    }

    public append(x: number, y: number, rotation: number, foodFound: boolean): void {
        const prevScent = this.trail ? this.trail[this.trail.length - 1] : undefined
        const newScent = new Scent(this.scene, x, y, rotation, foodFound)

        if (prevScent) {
            prevScent.nextScent = newScent
            newScent.prevScent = prevScent
        }

        this.trail.push(newScent)
        if (foodFound) this.activeTrail.push(newScent)
    }

    public setActive(bool: boolean): void {
        this.trail.forEach(scent => {
            scent.setFoodFound(bool)

            const PATH_COLOR = bool ? 0xffff00 : 0xff0000
            scent.setFillStyle(PATH_COLOR)
        })
    }

}

export default ScentPath