/*
    arrow functions are also called lambda functions.
    There are 3 parts of lambda functions
    1) Parameters: A function may optonally have paremeters
    2) The fat arrow notation/lambda notation(=>) also called as the "goes to the operator"
    3) Statemenst: represents the functions instruction set

    syntax
    let variable = (parameters)=>
    {
        block of code
    }
        variable();
*/

//Arrow functions with no params and no return types
let greet = (): void => {
  console.log("Arrow functions with no params and no return types");
};
greet();

//Arrow functions with params and return types
let sum = (a: number, b: number): number => {
  return a + b;
};
console.log(
  "Arrow functions with params and return types for sum",
  sum(10, 20)
);

//Arrow function with implicit return

let mul = (a: number, b: number): number => a * b;
console.log("Arrow functions with implicit return for multiply", mul(10, 20));

//Arrow functions with optional parameters

let record = (id: number, name: string, email?: string): void => {
  console.log("ID:", id);
  console.log("Name:", name);
  if (email !== undefined) {
    console.log("Email: ", email);
  }
};
record(1, "sachin", "sachin@bcci.com");
record(2, "kohli");

//Arrow functions with default params

let discount = (price:number,rate:number=0.50) =>
{
    let discount:number = price*rate;
    console.log("Discount Amount:",discount);
}
discount(1000);
discount(1000,0.2);

//Arrow functions with rest parameters

let  findlength = (...elements: (number | string)[]): number => 
{
  return elements.length;
}
console.log(findlength(1, "john", 2, "scott"));
console.log(findlength(10, 20, 30, 40, 50, 60));
console.log(findlength("red", "blue", "green"));
