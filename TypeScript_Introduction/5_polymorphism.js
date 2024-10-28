//Polymorphism allows objects of different types to be treated as objects of a common supertype. It enables methods to do different things based on the object that they are called on, even if they share the same method name. This helps in designing flexible systems where the same interface can represent different underlying forms (data types).
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.makeSound = function () {
        console.log('Meow');
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.makeSound = function () {
        console.log('Woof');
    };
    return Dog;
}());
function petSound(pet) {
    pet.makeSound();
}
var myCat = new Cat();
var mydog = new Dog();
petSound(myCat);
petSound(mydog);
