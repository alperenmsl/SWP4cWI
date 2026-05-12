import { Game, GameFramework } from "./GameFramework.js";
import { Circle } from "./Actors/Circle/Circle.js";
import { Rectangle } from "./Actors/Rectangle/Rectangle.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.speed = 100;
        this.isGoingRight = true;
        this.circles = [];
    }
    init() {
        console.log("Game started!");
        this.circles.push(new Circle(160, 300, 50, 50, 0, "rgb(226, 109, 0)"));
        this.circles.push(new Circle(300, 300, 50, 50, 0, "rgb(130, 98, 69)"));
        this.r1 = new Rectangle(200, 200, 100, 100, 50, 50, "rgb(0, 0, 255)");
        this.r2 = new Rectangle(300, 300, 100, 100, 50, 50, "rgb(255, 0, 0)");
    }
    update(deltaTime) {
        this.circles.forEach((circle) => {
            circle.update(deltaTime);
            if (circle.x + circle.radius > 800) {
                circle.x = 800 - circle.radius;
                circle.speedX *= -1;
            }
            else if (circle.x - circle.radius < 0) {
                circle.x = circle.radius;
                circle.speedX *= -1;
            }
        });
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
            if (this.r2.x > 800) {
                this.r2.x = -100;
                this.r2.y = -100;
            }
        }
    }
    render(ctx) {
        this.circles.forEach((circle) => circle.render(ctx));
        if (this.r1) {
            this.r1.render(ctx);
        }
        if (this.r2) {
            this.r2.render(ctx);
        }
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
