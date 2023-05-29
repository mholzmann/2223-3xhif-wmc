class Person {

    firstName: string;       // public field
    public lastName: string; // public field
    private age: number      // private field

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getName(): string {
        return this.firstName + " " + this.lastName;
    }

    isFullAged(): boolean {
        return this.age >= 18;
    }
}

const john: Person = new Person("John", "Smith", 34);
console.log(john);
console.log(`${john.getName()} is full aged: ${john.isFullAged()}`);
console.log();

const jane: Person = new Person("Jane", "Doe", 17);
console.log(jane);
console.log(`${jane.getName()} is full aged: ${jane.isFullAged()}`);