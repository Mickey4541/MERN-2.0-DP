//Polymorphism allows objects of different types to be treated as objects of a common supertype. It enables methods to do different things based on the object that they are called on, even if they share the same method name. This helps in designing flexible systems where the same interface can represent different underlying forms (data types).

class Cat{
    makeSound():void{
        console.log('Meow');
    }
}
class Dog{
    makeSound():void{
        console.log('Woof');
    }
}
function petSound(pet:any):void{
    pet.makeSound()
}
const myCat = new Cat()
const mydog = new Dog()

petSound(myCat);
petSound(mydog);