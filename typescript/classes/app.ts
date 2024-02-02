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


// Inheitance: Implements

interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number){}

    public getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    public constructor( width: number ){
        super(width, width);
    }
    // getArea() gets inhereted from Rectangle
}