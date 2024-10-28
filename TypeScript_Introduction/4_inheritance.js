// //inheritance::::
// //Example:1:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// class Animal{
//     name: string;
//     sound: string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// constructor(name:string, sound:string){
//     console.log('This is from inside animal constructure', name);
//     this.name = name
//     this.sound = sound
// }
// makeSound():void{
//     console.log(`${this.name} says ${this.sound}`);
// }
// }
// class Bird extends Animal{
//     canFly:boolean
//     constructor(name:string, sound:string, canFly:boolean){
//         super(name, sound) // This calls the constructor of the Animal class, passing in name and sound to initialize those properties for the Bird instance.Instance is an specific object created from the class.
//         this.canFly = canFly
//     }
//     fly():void{
//         if(this.canFly){
//             console.log(`${this.name} is flying`);
//         }else{
//             console.log(`${this.name} cannot fly.`);
//         }
//     }
// }
// const eagle = new Bird('Eagle', 'Screech', true)//it first call constructor of Bird and inside that bird, there is a super and super pass the name and sound to the parent constructor and call the parent class constructor also.
// eagle.makeSound()
// const ostrich = new Bird('ostrich', 'scream', false)
// ostrich.fly()
//Example 2":::::::::::::::::::::::::::::::::::::::::::::::;;;
var shape = /** @class */ (function () {
    function shape(color) {
        this.color = color;
    }
    shape.prototype.displayColor = function () {
        console.log("Color: ".concat(this.color));
    };
    return shape;
}());
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle(radius, color) {
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        return _this;
    }
    circle.prototype.calculateRadius = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return circle;
}(shape));
var rectangle = /** @class */ (function (_super) {
    __extends(rectangle, _super);
    function rectangle(width, height, color) {
        var _this = _super.call(this, color) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return rectangle;
}(shape));
var blueCircle = new circle(5, 'blue');
blueCircle.displayColor();
console.log(blueCircle.calculateRadius());
var rectangleho = new rectangle(5, 5, 'red');
rectangleho.displayColor();
console.log(rectangleho.calculateArea());
