class Ant extends Phaser.GameObjects.Sprite {
    private distance = 2

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'ant')
        this.scene = scene

        scene.add.existing(this)
    }

    private isOutOfBounds(): boolean {
        const width = this.scene.sys.canvas.getBoundingClientRect().width
        const height = this.scene.sys.canvas.getBoundingClientRect().height

        return this.x < 0 || this.x > width || this.y < 0 || this.y > height
    }

    public act(): void {
        const randomRotation = (Math.random() - 0.5)/4

        this.isOutOfBounds() ? this.rotation -= Math.PI : this.rotation += randomRotation

        this.x += this.distance * Math.cos(this.rotation)
        this.y += this.distance * Math.sin(this.rotation)
    }

}

export default Ant