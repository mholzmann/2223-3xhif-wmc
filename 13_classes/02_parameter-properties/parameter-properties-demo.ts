class Person {

    // each parameter property must have an visibility modifier
    constructor(public firstName: string, public lastName: string, private age: number) {

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