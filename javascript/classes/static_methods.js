class Car {
    constructor( name ){
        this.name = name;
    }
    static hello(x){
        return `Hello ${x.name}`;
    }
}

const myCar = new Car("Ford");

console.log(myCar, Car.hello(myCar));