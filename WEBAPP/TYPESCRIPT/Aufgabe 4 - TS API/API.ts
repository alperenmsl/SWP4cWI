import { Car } from "../TS OO Objectoriented/Car";

export interface API {
  getAllCars(): Car[];
  findCars(searchText: string): Car[];
}
