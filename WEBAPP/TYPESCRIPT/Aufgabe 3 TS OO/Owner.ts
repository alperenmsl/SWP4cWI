export class Owner {
  private firstName: string;
  private lastName: string;
  private age: number;

  constructor(firstname: string, lastName: string, age: number) {
    (this.firstName = firstname), (this.lastName = lastName), (this.age = age);
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }
  getAge(): number {
    return this.age;
  }
}
