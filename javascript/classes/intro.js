//! Javascript classes are not Objects, they are templates for javascript objects.

class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const car1 = new Car('Toyota', 2015);
const car2 = new Car('Volkswagen', 2020);

console.log(car1, car1.age()); 


//? THE CONSTRUCTOR METHOD
// - Has to have the exact name 'constructor'
// - Is executed automatically when a new object is created
// - Is used to initialize object properties
//* If a constructor method is not defined, JS will add an empty constructor method

