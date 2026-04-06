// Reversing a string
const string = "Typscript";
const reversedString = string.split("").reverse().join("");
console.log(`Original String: ${string}`);
console.log(`Reversed String: ${reversedString}`);

// Finding duplicates in an array
const arr = [1,2,3,2,4,1];
const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(`Duplicates: ${duplicates}`);

//Removing duplicates from an array
const uniqueArray = [...new Set(arr)];
console.log(`Unique Array: ${uniqueArray}`);

// Sorting an array in ascending and descending order
const array = [88,33,11,66,44]
const sortedArrayAscending = [...array].sort((a,b)=> a - b);
console.log(`Original Array: ${array}`);
console.log(`Ascending Sorted Array: ${sortedArrayAscending}`);
const sortedArrayDescending = [...array].sort((a,b)=> b - a);
console.log(`Descending Sorted Array: ${sortedArrayDescending}`);

// Swapping two variables
let string1:string = "kartik";
let string2:string = "patel";
[string1, string2] = [string2, string1];
console.log("string1: ", string1);
console.log("string2: ", string2);

// Finding the second largest number in an array
const secondLargest = [...new Set(arr)].sort((a,b)=>b-a)[1];
console.log(`Second Largest Number in array ${arr} is ${secondLargest}`);

// Finding the second smallest number in an array
const secondSmallest = [...new Set(arr)].sort((a,b)=>a-b)[1];
console.log(`Second Smallest Number in array ${arr} ${secondSmallest}`);

// Merging two arrays
const arr1:number[] = [1,2,3,0];
const arr2:number[] = [4,5,6,0];
const mergedArray:number[] = [...arr1, ...arr2];
console.log(`Merged Array: ${mergedArray}`);

// Merging two arrays without duplicates
const merged = [...new Set([...arr1, ...arr2])];
console.log(`Merged Array without duplicates: ${merged}`);

//Arrow functions in TypeScript
var add = (a: number, b: number): number => {return a + b};
console.log("Sum of 10 and 20 is: ", add(10, 20));