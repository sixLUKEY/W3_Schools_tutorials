class Person {
    name: string;
}

const person = new Person();
person.name = "Joseph";

class AnotherPerson {
    private name: string;

    public constructor( name: string ){
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const anotherPerson = new AnotherPerson('Jeremy');
console.log(anotherPerson.getName());