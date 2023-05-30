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

    set age(value: number) {
        if (value >= 0) {
            this._age = value;
        } else {
            console.error('Person.age must not be negative!');
        }
    }

    // If you want to rename a field when exporting it to JSON
    // you have to implement a toJSON() method.
    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            age: this._age
        }
    }
    
    static fromJSON(json: ReturnType<Person['toJSON']>): Person {
         return new Person(json.firstName, json.lastName, json.age);
    }
}

const john = new Person("John", "Smith", 34);
console.log(john);

const johnString = JSON.stringify(john);
console.log(johnString);

const johnClone: Person = Person.fromJSON(JSON.parse(johnString));
console.log(johnClone);
console.log(johnClone.getName());