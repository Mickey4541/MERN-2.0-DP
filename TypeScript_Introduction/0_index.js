var num = 5;
var message = "Hello World";
var isNepali = true;
//Array//.............................
var numbers = [1, 2, 3, 4, 5];
//numbers[5] = "Rajan"    //not valid
// let names:string[] = ["Rajan", "Raj", "Raja", 12]   //not valid
var names = ["Rajan", "Raj", "Raja"]; // valid
//enum.........................
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var userDirection = Direction.Up;
var user = {
    name: 'Rajan Bhandari',
    age: 24,
    isNepali: true,
    role: 'Manager',
    greet: function () {
        console.log('Hello');
    },
};
user.greet();
var user1 = {
    name: 'Rajan',
    age: 25,
    isNepali: true,
    role: 'Peon',
    address: 'tulsipur',
    greet: function () {
        console.log('hi');
    },
};
user1.greet();
var anotherUser = {
    name: 'Aditi Sharma',
    age: 30,
    rollNo: 25,
    subject: 'Full Stack Development'
};
