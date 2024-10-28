let num:number = 5
let message:string = "Hello World"
let isNepali:boolean = true

//Array//.............................
let numbers = [1,2,3,4,5]
//numbers[5] = "Rajan"    //not valid

// let names:string[] = ["Rajan", "Raj", "Raja", 12]   //not valid
let names:string[] = ["Rajan", "Raj", "Raja"]   // valid

//enum.........................
enum Direction{
    Up,
    Down,
    Left,
    Right
}
let userDirection:Direction = Direction.Up

//object..................................
//if we have to give type to object, we can use interface or type alias.
//using interface::::Interface: A blueprint for creating objects, defining what properties and methods they should have.
interface Employee{
    name: string;
    age: number;
    isNepali: boolean;
    role: string;//property
    greet(): void;
}
let user:Employee = {
    name: 'Rajan Bhandari',
    age: 24,
    isNepali: true,
    role: 'Manager',
    greet() {
        console.log('Hello');
        
    },
}
user.greet();
//inheriting the employee interface::
interface Person extends Employee{
    address: string;
}
let user1:Person = {
    name: 'Rajan',
    age: 25,
    isNepali: true,
    role: 'Peon',
    address: 'tulsipur',
    greet() {
        console.log('hi');
        
    },
}
user1.greet();



//using type alias::::A type alias in TypeScript is a way to give a name to a specific type or a combination of types. It allows you to create a new name for existing types, making your code cleaner and easier to read.
type rajanBhandari = {
    name: string;
    age: number;
    rollNo: number;
    subject: string;
};

let anotherUser: rajanBhandari = {
    name: 'Aditi Sharma',
    age: 30,
    rollNo: 25,
    subject: 'Full Stack Development'
};

//Union:::::::::::::::::::::::::::::::::::::::::::::
type ID = number | string | boolean
let userId:ID = 999
let userId1:ID = 'Two'
let userId2:ID = true


//intersection::::::::::::::::::::::::::::::::::::;
type Samsung = {
    name : string;
    brand: string;
    salary: string;
}

type Apple = {
    name: string;
    brand: string;
    demo: boolean;
}

type Engineer = Samsung & Apple //intersection

let developer:Engineer ={
    name: 'Rajan',
    brand: 'Samsung',
    demo: true,
    salary: '1 Lakhs'
} 