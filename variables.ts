//var Vs let Vs const
/*
    1) Scope
    2) Declaration
    3) Redeclaration
    4) Reassignment
    5) Hoisting

    //var: We don't use this in modern js/ts. Avaoid var as it has function scope and lead to unexpected behaviour. And it has a function scope.
    //let: use when we want to reaassign value to a variable. And it has block scope.
    //const: use when we don't want to reassign the value to a variable. And it has block scope.
*/
//scope===> functional scope and block scope

function variablesScope() {
  if (true) {
    var varMessage: string = "Hello var variable";
    console.log(varMessage + " inside block");
    let letMessage: string = "Hello let variable";
    console.log(letMessage + " inside block");
    const constMessage: string = "Hello const variable";
    console.log(constMessage + " inside block");
  }
  console.log(varMessage + " outside block");
  //console.log(letMessage + " outside block"); // not accessible here because let has block scope
  //console.log(constMessage + " outside block"); // not accessible here because const has block scope
}
variablesScope();

//Declaration 
var x;
console.log("Value of var when it's only declared not initilized:" ,x);

//initilization
x =10;
console.log("value of var after initilization: " ,x)

//Declaration 
let y;
console.log("Value of let when it's only declared not initilized:" ,y);

//initilization
y =20;
console.log("value of let after initilization: " ,y)

//Declaration 
//@ts-expect-error
 const z;
 console.log("Value of const when it's only declared not initilized:" ,z);

// Declaration & initilization at the same time
//@ts-ignore
const z =30;
console.log("value of var after initilization: " ,z)

//Redeclaration
var city = "Bangalore";
var city = "New Delhi"
console.log(city)
/*
redeclaration is not allwoed for let and const
let country = "India";
let country = "US";
console.log(country)

const color = "red";
const color = "blue";
console.log(color)
*/

//Reassignment

//@ts-ignore
var age = 25;
age = 30;
console.log(age);

let sex = "male";
sex = "female";
console.log(sex);

const subject = "Maths";
// subject = "Biology" //Reassignment not possible in const as the values are fixed.

//Hoisting
//@ts-ignore
console.log(a); //undefined
//@ts-ignore
var a = 10;
console.log(a)

/*
Not initialized
console.log(b);
let b = 10;
console.log(b)

console.log(c);
const  c = 10;
console.log(c)

*/