function addTwoNumber(num1:number, num2:number):number{
    return num1 + num2
}

function addTwoString(str1:string, str2:string):string{
    return str1 + str2
}



//genrics in function::::::
function jod<T>(data1:T, data2:T):string{ //yo line ko T kun datatype ko hunxa vanera determine chai caller function ley garxa.
    return `${data1} + ${data2}`
}
let answer = jod<string>('1', '2')
console.log(answer);

//generics
function identity<T>(param:T):T{
    return param
}
let resultaayo = identity<number>(10)
console.log(resultaayo);




//generics in interface::
interface Data<T,U>{
    first: T;
    second: U;
}
let data:Data<number,string> = {
    first: 1,
    second: 'Tarjan'
}
console.log(data)
let data2:Data<string,number>= {
    first: 'Rajan',
    second: 20
}
console.log(data2)




//// A generic function that concatenates two values of type number or string and returns a string.
function combineData<T extends number | string>(a:T, b:T):string{ 
    return `${a}${b}`
}
let resultaagaya = combineData("1", 'Rajan')
console.log(resultaagaya);