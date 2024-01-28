var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
person.name = "Joseph";
var AnotherPerson = /** @class */ (function () {
    function AnotherPerson(name) {
        this.name = name;
    }
    AnotherPerson.prototype.getName = function () {
        return this.name;
    };
    return AnotherPerson;
}());
var anotherPerson = new AnotherPerson('Jeremy');
console.log(anotherPerson.getName());
