//step1: Write a signature of a function.
//step2: implement a function
//step3: calling a function

//Example 1 Different parameter types(data types)
function getInfo(id: number): string;
function getInfo(name: string): string;

function getInfo(param: string | number): string {
  if (typeof param === "number") {
    return `UserID is ${param}`;
  } else {
    return `Username is ${param}`;
  }
}
console.log(getInfo(12));
console.log(getInfo("Mohan"));

//Example 2 Different numbers of parameters
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: number, b: number, c?: number): number {
  if (c === undefined) {
    return a + b;
  } else {
    return a + b + c;
  }
}
console.log(add(1, 2));
console.log(add(1, 2, 3));

//Example 3 Different return types
function processInput(input: string): string;
function processInput(input: number): number;

function processInput(input: string | number): string | number {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input * 2;
  }
}

console.log(processInput("Mohan"));
console.log(processInput(5));

//Example 4
function greet(name: string): string;
function greet(age: number): string;
function greet(isMarried: boolean): string;

function greet(value: string | number | boolean): string {
  if (typeof value === "string") {
    return `Hello ${value}`;
  } else if (typeof value === "number") {
    return `You are ${value} years old.`;
  } else {
    let res: string = value ? "married" : "single";
    return res;
  }
}
console.log(greet("John"));
console.log(greet(40));
console.log(greet(true));
