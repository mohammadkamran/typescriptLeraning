//@ts-ignore
let a:number=50, b:number=30;
//Airthmetic Operations
console.log(`Addition of ${a} and ${b} is:`,(a+b));
console.log(`Substraction of ${a} and ${b} is:`,(a-b));
console.log(`Multiplication of ${a} and ${b} is:`,(a*b));
console.log(`Divide of ${a} and ${b} is:`,(a/b));
console.log(`Modulus of ${a} and ${b} is:`,(a%b));

a = 100;
b = 50;
a+=b //a=a+b
console.log("sum: a+=b",a);
a-=b;
console.log("minus: a-=b",a);
a*=b;
console.log("multiply: a*=b",a);
a/=b;
console.log("divide: a/=b",a);
a%=b;
console.log("modulus: a%=b",a);

//Relational Operators always returns true or false (<,>,>=,<=,==(equality),!=,===(strict equality))

a=10;
b=20;
console.log(a>b); //false
console.log(a<b); //true
console.log(a>=b);//false
console.log(a<=b);//true
console.log(a!=b);//true
console.log(a==b);//false
console.log(a===b);//false


let check1:any = 10;
let check2:any = "10"
console.log(check1==check2); //true (only compare values i:e 10)
console.log(check1===check2); //false (compares both types and values)

//logical Operators (&&,||,!)

/*
 b1     b2      &&     ||     !b1
================================
true    true    true   true    false
true    false   false  true
false   true    false  true    true
false   false   false  false 

*/

let b1:boolean=true;
let b2:boolean=false;
console.log(b1&&b2); //false
console.log(b1||b2); //true
console.log(!b1); //false
console.log(!b2); //true

//combination of logical and relational operators
console.log(10>5 && 20>15); //true
console.log(10>5 || 20>15); //true

//Increment ++
//Decrement --

let value:number=10;
value++; //post increment = value=value+1
console.log(value)//11

let value1:number=20;
++value1; //pre increment = value1 = value1+1
console.log(value1)//21

let value2:number=30
let res2:number=value2++;
console.log(res2); //30
console.log(value2);//31

let value3:number=50
let res3:number=++value3;
console.log(res3); //51
console.log(value3);//51

let value4:number=60
let res4:number=value4--;
console.log(res4); //60
console.log(value4)//59

let value5:number=70
let res5:number=--value5;
console.log(res5); //69
console.log(value5)//59

//ternary operator(exp?res1:res2)
let ter1:number=100, ter2:number=200;
console.log(ter1>ter2?ter1:ter2) //200 if exp is true then ter1 is return else ter2
console.log(ter1<ter2?ter1:ter2) //100

let personAge:number=15
let egibility:string=(personAge>18?"Adult":"Minor")
console.log(egibility)
