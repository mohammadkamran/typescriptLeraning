//@ts-ignore
let age = 30;
console.log(typeof(age));
console.log(age)

//@ts-ignore
age = "Thirty";
console.log(typeof(age));
console.log(age)

//statically types programming language
//@ts-ignore
let a:number = 10;
//@ts-expect-error //compile type error.
a = "Ten" //other type data not allowed
console.log(a)

let num1:string = "5";
let num2:number = 3;
let result1=num1+num2;//53
console.log(`${num1} + ${num2} = ${result1}`)
let result = Number(num1)+num2;//8 Type Safety.
console.log(`${num1} + ${num2} = ${result}`)

/*
1) Primitive
string
number
boolen
null
undefined
any
union type
void

2) Non-Primitive
Array
class
Interface
Touple
*/

//Number Type represents both integers and floating types
//@ts-ignore
let b:number=30;
console.log(typeof(b))
let price = 25.5;
console.log(typeof(price))
let big = 123456789;
console.log(typeof(big))

//Strings("", '', ``)
let firstName:string = "Mohammad";
let lastName:string = 'Kamran'
let greetings:string = `Hello ${firstName} ${lastName}`
console.log(greetings)

//Boolean Type

let isStudent:boolean=true;
console.log("Is Student?", isStudent)
let hasJob:boolean=false;
console.log("Has job?", hasJob)

//Null & Undefined
let emptyvalue:null=null;
console.log(`empty value is ${emptyvalue}`);
let notDefined:undefined=undefined;
console.log(`undefined is ${undefined}`);
let c:number;
//@ts-ignore
console.log(c);

//Any type

let anyType:any = 5;
console.log("Number for any type", anyType);
anyType = "Five";
console.log("string of any type", anyType);
anyType=true;
console.log("boolean of any type", anyType);

//union type combine multiple types

let id:number|string|boolean;
id = "String"
console.log(`union of string ${id}`);
id = 10;
console.log(`union of number ${id}`)
id = false;
console.log(`union of boolean ${id}`)

//void used n functions that doesn't returns any data type

function show():void
{
    console.log("void function not returning any value")
}
show();

function sum(x:number,y:number)
{
    console.log(`sum of ${x} and ${y} is`, x+y);
}
sum(10,20)

function minus(x:number,y:number):number
{
    return(x-y)
}
let minusResult:number = minus(20,10);
console.log(minusResult)