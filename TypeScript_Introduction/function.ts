//regular function:::::::::::::::::::::::
function add(a:number,b:number):number//this last :number ensures that this function returns a number:
{
    return a + b;
}
console.log( add(5,5));


//arrow function::::::::::::::::::::::
const multiply = (a:number,b:number):number =>  {
    return a * b
}
let result = multiply(5, 5)
console.log(result);

//division
type division = (a:number, b:number) => number

const division:division = (a,b)=> a/b;
let result1 = division(1,2)
console.log(result1);



//Optional declaration:::::
interface User{
    id:number;
    name:string;
    email?:string //here email is optional
}
let friend1:User = {
    id: 1,
    name: 'Ram',
    //email is optional, so it can be omitted::
}