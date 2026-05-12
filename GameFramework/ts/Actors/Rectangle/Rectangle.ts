export class Rectangle {
  public x: number;
  public y: number;
  public height: number;
  public width: number;
  public speedX: number;
  public speedY: number;
  public color: string;

  constructor(
    x: number,
    y: number,
    height: number,
    width: number,
    speedX: number,
    speedY: number,
    color: string,
  ) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update(deltaTime: number): void {
    this.x += this.speedX * deltaTime;
    this.y += this.speedY * deltaTime;
  }
}
