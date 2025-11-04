import { Car } from "./types";

export interface API {
  getAllCars(): Car[];
  findCars(searchText: string): Car[];
}
