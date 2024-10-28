//Code in javascript::::::::::::::::::::::
// class Developer{
//     name = ''
//     position = ''

//     constructor(name, position){
//         this.name = name
//         this.position = position
//     }

//     code(){ //method is a function inside class.
//         console.log("I am Coding");
//     }
// }

// //class instantiation/call garda constructor function call hunxa.
// let Rajan = new Developer('Rajan', 'MERN STACK DEVELOPER')
// Rajan.code();
// console.log(Rajan.position);//property

//Same code in TypeScript:::::::::::::::::::::::::::::::::::
class Developer {
  name = "";
  position = "";

  constructor(name: string, position: string) {
    this.name = name;
    this.position = position;
  }
  Code() {
    //method
    console.log("Hello from code.");
  }
}
let Rajan = new Developer("Rajan", "Bhandari");
let Rahul = new Developer("Rahul", "Thapa");
Rajan.Code(); //Hello from code.
console.log(Rahul); //Developer { name: 'Rahul', position: 'Thapa' }
console.log(Rajan.position); //Bhandari
