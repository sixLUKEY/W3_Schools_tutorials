class Car {
    constructor( brand ){
        this._carName = brand;
    }
    present(){
        return `I have a ${this._carName}`;
    }
    get carName(){
        return this._carName;
    }
    set carName(x){
        this._carName = x;
    }
}

class Model extends Car {
    constructor( brand, mod ) {
        super(brand);
        this.model = mod;
    }
    show(){
        return this.present() + `, it is a ${this.model}`
    }
}

let myCar = new Model("Ford", "Mustang");

console.log(myCar.show());

const anotherCar = new Car("Ford");
anotherCar.carName = "Volvo";

console.log(anotherCar.carName)