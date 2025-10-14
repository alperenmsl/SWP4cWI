export class Engine {
  private hersteller: string;
  private horsepower: number;
  private kraftstoff: string;

  constructor(hersteller: string, horsepower: number, kraftstoff: string) {
    (this.hersteller = hersteller),
      (this.horsepower = horsepower),
      (this.kraftstoff = kraftstoff);
  }

  getHersteller(): string {
    return this.hersteller;
  }

  getHorsepower(): number {
    return this.horsepower;
  }

  getKraftstoff(): string {
    return this.kraftstoff;
  }
}
