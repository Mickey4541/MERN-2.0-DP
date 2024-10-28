//Encapsulation means data hiding.
//Encapsulation means hiding an object's data and only allowing it to be accessed or changed through specific methods. This keeps the data safe and organized.
var Person = /** @class */ (function () {
    function Person(name) {
        this._name = name;
    }
    Person.prototype.getName = function () {
        return this._name;
    };
    Person.prototype.setName = function (newName) {
        this._name = newName;
    };
    return Person;
}());
var person = new Person("Rajan");
person.setName("Bhandari");
console.log(person.getName());
