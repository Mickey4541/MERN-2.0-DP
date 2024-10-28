//Encapsulation means data hiding.
//Encapsulation means hiding an object's data and only allowing it to be accessed or changed through specific methods. This keeps the data safe and organized.


class Person{
   private _name:string //private banayepaxi _rakhni convention follow matra gareko. na rakhdaa ni hunxa.
    constructor(name:string){
        this. _name = name
    }
    getName():string{
        return this. _name
    }

    setName(newName:string):void{
        this. _name = newName
    }

}

const person = new Person("Rajan")
person.setName("Bhandari");
console.log(person.getName());

