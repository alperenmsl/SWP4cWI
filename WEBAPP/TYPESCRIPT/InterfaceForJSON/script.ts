interface Person {
  firstName: string;
  lastName: string;
  age: number;
  isMale?: boolean;
}

const personen: Person = {
  firstName: "Alperen",
  lastName: "Meseli",
  age: 17,
  isMale: true,
};

function printName(personen: Person) {
  console.log(personen);
}

printName(personen);
