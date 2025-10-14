export class Car {
  constructor(
    private brand: string,
    private model: string,
    private year: number,
    private ps: number,
    private color: string
  ) {}

  getBrand(): string {
    return this.brand;
  }

  getModel(): string {
    return this.model;
  }
}
