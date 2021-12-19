/**
 * Creates a scent for ants to follow the food. They're small circles that store a direction in which the previous ant went.
 */
class Scent extends Phaser.GameObjects.Ellipse {
    public direction: number
    private foodFound: boolean

    public prevScent: Scent
    public nextScent: Scent

    /**
     * 
     * @param direction - The direction in which the ant went intially
     */
    constructor(scene: Phaser.Scene, x: number, y: number, direction: number, foodFound: boolean) {
        super(scene, x, y, 3, 3, foodFound ? 0xff0000 : 0xffff00)
        this.direction = direction

        this.foodFound = foodFound
        this.smoothness = 8 // decrease object smoothness for performance

        scene.add.existing(this)
        scene.physics.add.existing(this)
    }

    public setFoodFound(bool: boolean): void {
        this.foodFound = bool
    }

}

export default Scent