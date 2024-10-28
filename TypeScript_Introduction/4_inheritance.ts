//inheritance::::
//Example:1:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
class Animal{
    name: string;
    sound: string;

constructor(name:string, sound:string){
    console.log('This is from inside animal constructure', name);
    
    this.name = name
    this.sound = sound
}
makeSound():void{
    console.log(`${this.name} says ${this.sound}`);
}
}

class Bird extends Animal{
    canFly:boolean

    constructor(name:string, sound:string, canFly:boolean){
        super(name, sound) // This calls the constructor of the Animal class, passing in name and sound to initialize those properties for the Bird instance.Instance is an specific object created from the class.
        this.canFly = canFly
    }
    fly():void{
        if(this.canFly){
            console.log(`${this.name} is flying`);
        }else{
            console.log(`${this.name} cannot fly.`);
            
        }
    }
}

const eagle = new Bird('Eagle', 'Screech', true)//it first call constructor of Bird and inside that bird, there is a super and super pass the name and sound to the parent constructor and call the parent class constructor also.
eagle.makeSound()


const ostrich = new Bird('ostrich', 'scream', false)
ostrich.fly()


//Example 2":::::::::::::::::::::::::::::::::::::::::::::::;;;
class shape{
    color: string

    constructor(color:string){
        this.color = color
    }
    displayColor():void{
        console.log(`Color: ${this.color}`);
        
    }
}


class circle extends shape{
    radius: number;

    constructor(radius:number, color:string){
        super(color)
        this.radius = radius
    }
    calculateArea():number{
        return Math.PI * this.radius ** 2
    }
}



class rectangle extends shape{
    width: number;
    height: number;

    constructor(width:number, height:number, color: string){
        super(color)
        this.width = width
        this.height = height
    }
    calculateArea():number{
        return this.width * this.height
    }
}

const blueCircle = new circle(5, 'blue')
blueCircle.displayColor()
console.log(blueCircle.calculateArea());


const rectangleho = new rectangle(5,5, 'red')
rectangleho.displayColor()
console.log(rectangleho.calculateArea());

