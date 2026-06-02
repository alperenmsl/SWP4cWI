import { Actor } from "../actor.js";
import { MoveStrategy } from "../Movements/MoveStrategy.js";

export class Circle implements Actor {
  private radius: number = 10;

  constructor(
    private movement: MoveStrategy,
    radius?: number,
  ) {
    if (radius !== undefined) {
      this.radius = radius;
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    console.log("in Circle");
    console.log("POS:", this.movement.getX(), this.movement.getY());
    ctx.fillStyle = "#099fbd";
    ctx.beginPath();
    ctx.arc(
      this.movement.getX(),
      this.movement.getY(),
      this.radius,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  }

  update(deltaTime: number): void {
    this.movement.update(deltaTime);
  }
}
