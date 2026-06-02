export class Circle {
    constructor(movement, radius) {
        this.movement = movement;
        this.radius = 10;
        if (radius !== undefined) {
            this.radius = radius;
        }
    }
    render(ctx) {
        console.log("in Circle");
        console.log("POS:", this.movement.getX(), this.movement.getY());
        ctx.fillStyle = "#099fbd";
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    update(deltaTime) {
        this.movement.update(deltaTime);
    }
}
