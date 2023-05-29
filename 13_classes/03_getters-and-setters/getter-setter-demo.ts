class Person {

    // each parameter property must have an visibility modifier
    constructor(public firstName: string, public lastName: string, private _age: number) {

    }

    getName(): string {
        return this.firstName + " " + this.lastName;
    }

    isFullAged(): boolean {
        return this.age >= 18;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value >= 0) {
            this._age = value;
        } else {
            console.error('Person.age must not be negative!');
        }
    }
}

const john: Person = new Person("John", "Smith", 34);
console.log(john);
john.age = 35;
john.age++;
john.age = -10;
console.log(john.age);
console.log(`${john.getName()} is full aged: ${john.isFullAged()}`);