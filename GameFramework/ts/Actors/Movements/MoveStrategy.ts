export interface MoveStrategy {
  update(deltaTime: number): void;
  getX(): number;
  getY(): number;
}
