import { Engine } from "./Engine";
import { Owner } from "./Owner";

const owner = new Owner("Recep", "Speedster", 33);
const engine = new Engine("Steyr Motors", 136, "Benzin");

console.log("Besitzer:", owner.getFirstName());
console.log("Motor:", engine.getHersteller());
