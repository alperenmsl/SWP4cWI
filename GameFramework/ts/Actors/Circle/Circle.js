export class Circle {
    constructor(x, y, radius, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.radius = radius;
        this.color = color;
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    update(deltaTime) {
        this.x += this.speedX * deltaTime;
        this.y += this.speedY * deltaTime;
        if (this.x + this.radius > 800) {
            this.x = 800 - this.radius;
            this.speedX *= -1;
        }
        else if (this.x - this.radius < 0) {
            this.x = this.radius;
            this.speedX *= -1;
        }
        if (this.y + this.radius > 600) {
            this.y = 600 - this.radius;
            this.speedY *= -1;
        }
        else if (this.y - this.radius < 0) {
            this.y = this.radius;
            this.speedY *= -1;
        }
    }
}
