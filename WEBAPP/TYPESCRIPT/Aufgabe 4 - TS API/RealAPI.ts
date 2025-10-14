// AutoGeschaeft2API.ts
import { Car } from "./types";
import { API } from "./API";

export class RealAPI implements API {
  private cars: Car[] = [
    new Car("Mercedes", "C200", 2018, 184, "Silver"),
    new Car("Tesla", "Model 3", 2022, 283, "Midnight Silver"),
    new Car("Ford", "Focus ST", 2016, 250, "Nitrous Blue"),
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
