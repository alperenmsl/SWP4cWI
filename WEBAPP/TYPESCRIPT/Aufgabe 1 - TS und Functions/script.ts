// Create an Car interface with these properties:
// 	• brand: string
// 	• model: string
// 	• price: number
// 	• year: number

// Create Sample data with ChatGPT

// Create the following functions:
// 	• Calculate total price
// Write a function getTotalPrice(cars: Car[]): number that adds up the price of all cars.
// 	• Print list of cars
// Write a function printCars(cars: Car[]): void that logs all cars nicely formatted to the console.
// 	• Filter expensive cars
// Write a function getExpensiveCars(cars: Car[], minPrice: number): Car[] that returns only the cars that are more expensive than a given value.

// 	1) Programmiere alle Funktionen mit for-each schleifen
// 	2) Programmiere die Funktionen ein 2tes mal (mit anderem Namen) mit den Array-Funktionen
// 		a. Filter
// 		b. Reduce

interface Car {
  brand: string;
  model: string;
  price: number;
  year: number;
}

const cars: Car[] = [
  { brand: "BMW", model: "320d F30 - M Paket", price: 23000, year: 2013 },
  { brand: "Mercdes-Benz", model: "C180", price: 16000, year: 2010 },
  { brand: "Audi", model: "A4 2.0 TDI", price: 21000, year: 2015 },
  { brand: "Volkswagen", model: "Golf 7 GTI", price: 25000, year: 2018 },
];

function getTotalPrice(cars: Car[]): number {
  let total = 0;
  for (let i = 0; i < cars.length; i++) {
    total += cars[i].price;
  }
  return total;
}

function printCars(cars: Car[]): void {
  console.log("---------- Alle Verfügbaren Autos ----------");
  for (const c of cars) {
    console.log(
      "Brand: " +
        c.brand +
        " " +
        c.model +
        " | Price: " +
        c.price +
        " | Year: " +
        c.year +
        "\n"
    );
  }
}

printCars(cars);
console.log("Gesammt Preis: ", getTotalPrice(cars), "€");
const expensiveCars = cars.filter((car) => car.price > 20000);
console.log(expensiveCars);
