/* 
    forEach(),map(),filtrer(),reduce(),some(),every()...
*/

/* 
    forEach() -Executes function once for a each array element.
    It takes function as a parameter.
    syntax: array.forEach(function(currentValue,index,array){})
    currentValue - The current element being processed in the array.
    index(optional) - The index of the current element being processed in the array.
    array(optional) - The array the current elements belongs to.
*/

//EX1: Get index of all the fruits along with value
let fruits:string[] = ["Apple","Mango","Kiwi","Orange","Banana"];
for(let i in fruits){
    console.log(i,fruits[i]);
};

console.log("Printing fruits name along with index using forEach.............")
fruits.forEach(function(element,index){
    console.log(`${index}`, `${element}`);
});

//forEach arrow functio
console.log("forEach() used in arrow function-------------")
fruits.forEach((element,index)=>{
    console.log(index,element);
});

//Ex2:
fruits.forEach((element)=>{
    console.log(element.toUpperCase());
});

/*
    map() Creates a new array with the result of calling the function on every element of an array
    It takes function as a parameter
    syntax: array.map(function(currentValue,index,array){})
*/

//Ex1: Get square of all the numbers in an array
let numbers:number[] = [1,2,3,4,5,6,7,8,9];
let squaredNumbers = numbers.map(function(element){
    return(element*element);
});
console.log("Squared Numbers: ", squaredNumbers)

//Ex2: Double each number
let doubleNumbers = numbers.map((element)=>{
    return(element*2);
});
console.log("Doubled Numbers: ", doubleNumbers);

/* 
    filter() Creates a new array with all the elements that pass/satisfy the function
    It takes function as a parameter
    Returns either same or fewer number of elements compared to original array
    syntax: array.filter(function(currentValue,index,array){})
 */
let evenNumbers = numbers.filter((num)=>num%2==0);
console.log("Even Numbers: ",evenNumbers);

let numberGreaterThanThree = numbers.filter((num)=>num>3);
console.log("Numbers greater than three: ", numberGreaterThanThree);

/**
    reduce() Applies a function on every element of an array and returns a single value
    syntax: array.reduce(function(accumulator,currentValue,index,array){})
    accumulator - The accumulated value from previous iteration.
    currentValue - The current element being processed
 */
//Ex1: Get the total(sum) of all the elements in the array
let total =0;
for(let i=0;i<numbers.length;i++){
    total = total + numbers[i];
}
console.log("Find total using normal for loop: ", total)

let reduceResult = numbers.reduce((total,element)=>{
    return(total + element);
},0); //here 0 is default value of accumulator
console.log("Find total using reduce methods: ", reduceResult);

/*
    some() - check if element satisfied the conditions
    Returns true if atleast one element is satisfied, else false
    syntax: array.some(function(currentValue,index,array){})
 */
//Ex1: Check array contains negative number or not
let hasNegative = numbers.some((element)=>element<0);
console.log("Numbers has negative:", hasNegative);

//Ex2: Check array contains positive number or not
let hasPositive = numbers.some((element)=>element>0);
console.log("Numbers has positive:", hasPositive);

/*
    every() - checks if all elements satisfy the condition
    Returns true if all elements are passed, else false
    syntax: array.every(function(currentValue,index,array){})
*/
//Ex1: Check all numbers are even or not
let hasEveryEven = numbers.every((element)=>element%2==0);
console.log("Check even in array: ", hasEveryEven);

//Ex2: All numbers are greater than 0 or positive or not
let hasEveryGreaterThanZero = numbers.every((element)=>element>0);
console.log("Check even in array: ", hasEveryGreaterThanZero);