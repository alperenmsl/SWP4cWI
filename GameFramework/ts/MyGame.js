import { Game, GameFramework } from "./GameFramework.js";
import { Circle } from "./Actors/Circle/Circle.js";
import { Rectangle } from "./Actors/Rectangle/Rectangle.js";
import { Tree } from "./Actors/Tree/Tree.js";
import { RightMovement } from "./Actors/Movements/RightMovement.js";
import { LeftMovement } from "./Actors/Movements/LeftMovement.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.speed = 300;
        this.isGoingRight = true;
        this.actors = [];
    }
    init() {
        console.log("Game started!");
        this.actors.push(new Circle(new RightMovement(100, 100, 200), 20), new Circle(new LeftMovement(300, 200, 200), 20), new Circle(new RightMovement(500, 300, 200), 20));
        this.actors.push(new Tree(400, 400, 60));
        this.actors.push(new Tree(300, 300, 60));
        this.r1 = new Rectangle(200, 200, 100, 100, 50, 50, "rgb(214, 78, 16)");
        this.r2 = new Rectangle(300, 300, 100, 100, 50, 50, "rgb(188, 161, 93)");
    }
    update(deltaTime) {
        this.actors.forEach((actor) => actor.update(deltaTime));
        if (this.r1) {
            const direction = this.isGoingRight ? 1 : -1;
            this.r1.x += this.speed * direction * deltaTime;
            if (this.r1.x > 700) {
                this.r1.x = 700;
                this.isGoingRight = false;
            }
            else if (this.r1.x < 0) {
                this.r1.x = 0;
                this.isGoingRight = true;
            }
        }
        if (this.r2) {
            this.r2.update(deltaTime);
            if (this.r2.x + this.r2.width > 800) {
                this.r2.x = 800 - this.r2.width;
                this.r2.speedX *= -1;
            }
            else if (this.r2.x < 0) {
                this.r2.x = 0;
                this.r2.speedX *= -1;
            }
            if (this.r2.y + this.r2.height > 600) {
                this.r2.y = 600 - this.r2.height;
                this.r2.speedY *= -1;
            }
            else if (this.r2.y < 0) {
                this.r2.y = 0;
                this.r2.speedY *= -1;
            }
        }
    }
    render(ctx) {
        this.actors.forEach((actor) => actor.render(ctx));
        if (this.r1)
            this.r1.render(ctx);
        if (this.r2)
            this.r2.render(ctx);
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
