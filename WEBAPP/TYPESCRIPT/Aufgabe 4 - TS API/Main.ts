import { API } from "./API";
import { FakeAPI } from "./FakeAPI";
import { RealAPI } from "./RealAPI";

let api: API = new FakeAPI();

console.log("Alle Autos aus FakeAPI:");
api.getAllCars().forEach((car) => console.log(car.getBrand(), car.getModel()));

api = new RealAPI();
console.log("Alle Autos aus RealAPI:");
api.getAllCars().forEach((car) => console.log(car.getBrand(), car.getModel()));

const searchText = "A3";
const foundCars = api.findCars(searchText);

console.log("Suche nach " + searchText + " in dieser API:");
foundCars.forEach((car) => console.log(car.getBrand(), car.getModel()));
