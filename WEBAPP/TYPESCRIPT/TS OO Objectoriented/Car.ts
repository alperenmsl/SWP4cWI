export class Car {
  private brand: string;
  private model: string;
  private EZ: number;
  private PS: number;
  private color: string;

  constructor(
    brand: string,
    model: string,
    EZ: number,
    PS: number,
    color: string
  ) {
    (this.brand = brand),
      (this.model = model),
      (this.EZ = EZ),
      (this.PS = PS),
      (this.color = color);
  }

  getColor(): string {
    return this.color;
  }

  getBrand(): string {
    return this.brand;
  }

  getModel(): string {
    return this.model;
  }
}
