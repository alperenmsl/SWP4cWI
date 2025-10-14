import { Car } from "./types";
import { API } from "./API";

export class FakeAPI implements API {
  private cars: Car[] = [
    new Car("BMW", "E90", 2011, 110, "Metallic Grey"),
    new Car("Audi", "A3 Sportback", 2015, 150, "Black"),
    new Car("Volkswagen", "Golf 7", 2017, 125, "White"),
  ];

  getAllCars(): Car[] {
    return this.cars;
  }
  findCars(searchText: string): Car[] {
    const lower = searchText.toLowerCase();
    return this.cars.filter(
      (c) =>
        c.getBrand().toLowerCase().includes(lower) ||
        c.getModel().toLowerCase().includes(lower)
    );
  }
}
