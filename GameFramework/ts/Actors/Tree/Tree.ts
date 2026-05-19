import { Actor } from "../actor.js";

export class Tree implements Actor {
  public x: number;
  public y: number;
  public size: number;

  constructor(x: number, y: number, size: number) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  render(ctx: CanvasRenderingContext2D): void {
    // Trunk
    ctx.fillStyle = "rgb(101, 67, 33)";
    ctx.fillRect(
      this.x - this.size * 0.15,
      this.y + this.size * 0.4,
      this.size * 0.3,
      this.size * 0.6,
    );

    // Bottom layer (largest)
    ctx.fillStyle = "rgb(34, 139, 34)";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - this.size);
    ctx.lineTo(this.x - this.size * 0.6, this.y + this.size * 0.1);
    ctx.lineTo(this.x + this.size * 0.6, this.y + this.size * 0.1);
    ctx.closePath();
    ctx.fill();

    // Middle layer
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - this.size * 1.2);
    ctx.lineTo(this.x - this.size * 0.45, this.y - this.size * 0.3);
    ctx.lineTo(this.x + this.size * 0.45, this.y - this.size * 0.3);
    ctx.closePath();
    ctx.fill();

    // Top layer (smallest)
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - this.size * 1.6);
    ctx.lineTo(this.x - this.size * 0.3, this.y - this.size * 0.8);
    ctx.lineTo(this.x + this.size * 0.3, this.y - this.size * 0.8);
    ctx.closePath();
    ctx.fill();
  }

  update(deltaTime: number): void {
    // Static actor — no movement needed
  }
}
