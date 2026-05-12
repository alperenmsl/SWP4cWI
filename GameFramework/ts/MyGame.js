import { Game, GameFramework } from "./GameFramework.js";
import { Circle } from "./Actors/Circle.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.x = 0;
        this.y = 0;
        this.x1 = 0;
        this.y1 = 0;
        this.speed = 100;
        this.isGoingRight = true;
    }
    init() {
        console.log("Game started!");
        this.c1 = new Circle(100, 100, 50, "rgb(226, 109, 0)");
    }
    update(deltaTime) {
        if (this.c1) {
            this.c1.update(deltaTime);
        }
        const direction = this.isGoingRight ? 1 : -1;
        this.x += this.speed * direction * deltaTime;
        if (this.x > 700) {
            this.x = 700;
            this.isGoingRight = false;
        }
        else if (this.x < 0) {
            this.x = 0;
            this.isGoingRight = true;
        }
        // Goldenes Rechteck bewegt sich diagonal
        this.x1 += this.speed * deltaTime;
        this.y1 += this.speed * deltaTime;
        if (this.x1 > 800) {
            this.x1 = -100;
            this.y1 = -100;
        }
    }
    render(ctx) {
        if (this.c1) {
            this.c1.render(ctx);
        }
        ctx.fillStyle = "#000000ff";
        ctx.fillRect(this.x, this.y, 100, 100);
        ctx.fillStyle = "rgb(189, 0, 180)";
        ctx.fillRect(this.x1, this.y1, 80, 80);
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
