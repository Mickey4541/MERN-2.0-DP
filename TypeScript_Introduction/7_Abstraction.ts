//Abstraction is the concept of simplifying complex systems by only showing the essential features and hiding the unnecessary details. In OOP, abstraction allows you to focus on what an object does, rather than how it does it, by defining methods without revealing internal implementation.

class Shape{
    private _color:string
    constructor(color:string){
        this._color = color
    }
    //abstracting the implementation detail:
    private _calculatePerimeter():number{
        console.log("Calculating Perimeter");
        return 0;        
    }
    displayInfo():void{
        const Perimeter = this._calculatePerimeter()
        console.log(`Perimeter: ${Perimeter}`);
    }
}
const myShape = new Shape("red")
myShape.displayInfo()


// This Shape class has a private _color property and a private _calculatePerimeter method, which calculates and returns the perimeter (currently returns 0). The displayInfo method calls _calculatePerimeter and displays the result. Only displayInfo is accessible outside, keeping color and _calculatePerimeter hidden.

//So, calling displayInfo allows indirect access to _calculatePerimeter.