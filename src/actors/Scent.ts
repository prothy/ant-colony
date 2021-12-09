/**
 * Creates a scent for ants to follow the food. They're small circles that store a direction in which the previous ant went.
 */
class Scent extends Phaser.GameObjects.Ellipse {
    public direction: number
    private foodFound: boolean

    /**
     * 
     * @param direction - The direction in which the ant went intially
     */
    constructor(scene: Phaser.Scene, x: number, y: number, direction: number) {
        super(scene, x, y, 3, 3, 0xff0000)
        this.direction = direction

        this.foodFound = false
        this.smoothness = 8 // decrease object smoothness for performance

        scene.add.existing(this)
        scene.physics.add.existing(this)
    }

    public setFoodFound(bool: boolean): void {
        this.foodFound = bool
    }

}

export default Scent