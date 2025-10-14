interface Car {
  brand: string;
  model: string;
  year: number;
  color: string;
  horsepower: number;
  fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Manual" | "Automatic";
}

const carList: Car[] = [
  {
    brand: "BMW",
    model: "E90",
    year: 2011,
    color: "Metallic Grey",
    horsepower: 110,
    fuelType: "Diesel",
    transmission: "Manual",
  },
  {
    brand: "Audi",
    model: "A3 Sportback",
    year: 2015,
    color: "Deep Black",
    horsepower: 150,
    fuelType: "Petrol",
    transmission: "Automatic",
  },
  {
    brand: "Volkswagen",
    model: "Golf 7",
    year: 2017,
    color: "Pure White",
    horsepower: 125,
    fuelType: "Petrol",
    transmission: "Manual",
  },
  {
    brand: "Mercedes-Benz",
    model: "C200",
    year: 2018,
    color: "Obsidian Black",
    horsepower: 184,
    fuelType: "Petrol",
    transmission: "Automatic",
  },
  {
    brand: "Tesla",
    model: "Model 3",
    year: 2022,
    color: "Midnight Silver",
    horsepower: 283,
    fuelType: "Electric",
    transmission: "Automatic",
  },
  {
    brand: "Ford",
    model: "Focus ST",
    year: 2016,
    color: "Nitrous Blue",
    horsepower: 250,
    fuelType: "Petrol",
    transmission: "Manual",
  },
  {
    brand: "Alfa Romeo",
    model: "Giulia Veloce",
    year: 2018,
    color: "Nero Vulcano",
    horsepower: 280,
    fuelType: "Petrol",
    transmission: "Automatic",
  },
];

// Checke folgene Array Funktionen. Mache Beipsielcode

// Map
// Filter
// Sort
// Find
// Reduce
// Some
// Every

//Funktion Map
const brand = carList.map((car) => car.brand);
console.log(brand);

//Funktion Filter
const highHP = carList.filter((car) => car.horsepower > 170);
console.log(highHP);

//Funktion Sort
const highToLowHP = carList.sort((a, b) => b.horsepower - a.horsepower);
console.log(highToLowHP);

console.log("\nCars that start with the letter A: ");

//Funktion Find
const carsWithA = carList.find((car) => car.brand.startsWith("A"));
console.log(carsWithA);

//Funktion reduce
const gesHP = carList.reduce((sum, car) => sum + car.horsepower, 0);

console.log(gesHP);

//Funktion Some
const StrongCar = carList.some((car) => car.horsepower > 140);

console.log(StrongCar);

//Funktion Every
const allAbove100 = carList.every((car) => car.horsepower > 160);

console.log(allAbove100);
