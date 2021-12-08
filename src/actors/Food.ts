class Food extends Phaser.GameObjects.Ellipse {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 20, 20, 0xff0000)
        this.scene = scene

        scene.add.existing(this)
    }
}

export default Food