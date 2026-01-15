/*
    Arrays in typescript
    - Arrays is a special type of varaibles that stores multiple values.
    - The value can be of same data type or different data type.
    - Arrays aredeclared using [], or the generic `Array<T>` type.
    - Indexing starts from 0;
    - Arrays are an ordered collections of elements. 

*/

//Approach 1: using literals
let names: string[] = []; //declaration

//assigning values
names[0] = "John";
names[1] = "Steve";
names[2] = "Peter";
names[3] = "Smith";
console.log(names);

let names1: string[] = ["Mohan", "Ram", "Shayam"]; //declaration + Initialization
console.log(names1);

//Approach 2: using generic Array<T> type
let empNames: Array<string> = ["John", "Peter", "Orion", "Mac"];
console.log("Only string arrays: ", empNames);
console.log("Size of empNames array: ", empNames.length);
let empId: Array<number> = [1, 2, 3, 4];
console.log("Only numbers arrays: ", empId);
let data: Array<string | number> = ["Sam", "Aamir", 1, 2, "Jack", 3, "Milaan"];
console.log("String and number arrays: ", data);
let mixedData: Array<any> = [true, false, "Sameer", 1, 2, "Aryan"];
console.log("Mixed arrays: ", mixedData);

//Extarct values of empNames using traditional forloops
console.log("Extracting Employee names using for loop...............");
for (let i = 0; i < empNames.length; i++) {
  console.log(empNames[i]); // i reperensting the index.
}

//Iterating using for...in loop(indexes)
console.log("Extracting Employee Id is using forIn loop");
for (let i in empId) {
  console.log(empId[i]);
}

//Iterating using for...of loop(values)
console.log("Extracting Mixed data using for of...........");
for (let value of data) {
  console.log(value);
}

//Passing array to the function
function search(element: number, arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true; //Element found
    }
  }
  return false;
}
let arr: number[] = [10, 20, 30, 40, 50];
console.log(search(20, arr)); //true
console.log(search(100, arr)); //false

// A function takes an Array and returns an Array
function capitalizeWords(arr: string[]): string[] {
  let resultArray: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    resultArray[i] = arr[i].toUpperCase();
  }
  return resultArray;
}
let words: string[] = ["Hello", "World", "Typescript"];
console.log(capitalizeWords(words));
