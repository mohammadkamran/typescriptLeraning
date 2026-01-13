/* 
Named function: Function having name.
syntax 
function functionName(parameter):returnType
{
    block of code
}
functionName() calling the function
*/

// Named function with no parameter and no return type
function display(): void {
  console.log("This is a function with no parameter and no return type");
}
display();

//Named function with parameter and return type

function addNumbers(x: number, y: number): number {
  return x + y;
}
let c: number = 4;
let d: number = 6;
let addResult: number = addNumbers(c, d);
console.log(`sum of ${c} and ${d} is ${addResult}`);

//Named functions with rest parameters or multiple params

function add(...nums: number[]) {
  let i;
  let sum: number = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log("Sum of the numbers are: ", sum);
}
add(1, 2);
add(10, 20, 30, 40, 50);
add(100, 200, 400, 400, 500, 600, 700, 800, 900, 1000);

//Named functions with rest parameters or multiple params of diff types

function findElements(...elements: (number | string)[]): number {
  return elements.length;
}
console.log(findElements(1, "john", 2, "scott"));
console.log(findElements(10, 20, 30, 40, 50, 60));
console.log(findElements("red", "blue", "green"));

//Named functions with optional parameters

function optionalDisplay(id: number, name: string, mailId?: string): void {
  console.log("ID: ", id);
  console.log("Name:", name);
  if (mailId !== undefined) {
    console.log("Email: ", mailId);
  }
}
optionalDisplay(1, "scott", "scott@gmail.com");
optionalDisplay(2, "mat");


//Named functions with default paarmeters

function calculateDiscount(price:number,rate:number=0.50)
{
    let discount:number = price*rate;
    console.log("Discount Amount:",discount);
}
calculateDiscount(1000);
calculateDiscount(1000,0.2);