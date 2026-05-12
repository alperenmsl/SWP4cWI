export class Rectangle {
    constructor(x, y, height, width, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update(deltaTime) {
        this.x += this.speedX * deltaTime;
        this.y += this.speedY * deltaTime;
    }
}
