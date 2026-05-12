import { Game, GameFramework } from "./GameFramework.js";
import { Circle } from "./Actors/Circle/Circle.js";
import { Rectangle } from "./Actors/Rectangle/Rectangle.js";

class MyGame extends Game {
  private speed: number = 100;
  private isGoingRight: boolean = true;

  private c1?: Circle;
  private r1?: Rectangle;
  private r2?: Rectangle;

  init(): void {
    console.log("Game started!");
    this.c1 = new Circle(100, 100, 50, "rgb(226, 109, 0)");
    this.r1 = new Rectangle(200, 200, 100, 100, 50, 50, "rgb(0, 0, 255)");
    this.r2 = new Rectangle(300, 300, 100, 100, 50, 50, "rgb(255, 0, 0)");
  }

  update(deltaTime: number): void {
    if (this.c1) {
      this.c1.update(deltaTime);
    }

    if (this.r1) {
      const direction = this.isGoingRight ? 1 : -1;
      this.r1.x += this.speed * direction * deltaTime;

      if (this.r1.x > 700) {
        this.r1.x = 700;
        this.isGoingRight = false;
      } else if (this.r1.x < 0) {
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

  render(ctx: CanvasRenderingContext2D): void {
    if (this.c1) {
      this.c1.render(ctx);
    }

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
