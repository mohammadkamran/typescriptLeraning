let numbers:number[] = [1,2,3,4,5];
console.log("Numbers of arrays: ", numbers);
console.log("Size of numbers arrays: ", numbers.length)
let fruits:string[] = ["Banana","Guava","Grapes","Apples","Watermelon","Papaya","Orange"];
console.log("Fruits of arrays: ",fruits);
console.log("Size of fruits array: ", fruits.length);

/* push() --Adds single or multiple elements at the end of the array
   syntax array.push(element1, element2, ..... elementN);
*/
numbers.push(6,7)
console.log("Numbers array after push: ", numbers)

/*
    pop() --Removes the last element from an array
    syntax --array.pop();
*/
let popNumber = numbers.pop();
console.log("Removed number is: ", popNumber);
console.log("Numbers after pop", numbers);

/*  shift() -Removes first element from the array
    syntax  array.shift();
*/
let shiftNumber = numbers.shift();
console.log("Shift Number is: ", shiftNumber);
console.log("Numbers after shift: ",numbers)

/*
    unshift() -Add single/multiple elements to the begining of the array
    syntax array.unshift(element1, element2 .... elementN)
*/
numbers.unshift(0,1);
console.log("Numbers after unshift: ", numbers)

/*
    concat() -Combines two or more arrays of same type
    syntax: array.concat(array1....arrayN)
*/
let combinedArrays = numbers.concat([8,9],[10]);
console.log("Concated numbers: ",combinedArrays) //[0,1,2,3,4,5,6,7,8,9,10]

/*
    slice() Extracts section of an array
    Index starts from 0 and extracts the given starting index
    ending index will be exclusive: Ex- If 3 is ending index, it will consoder 2
    syntax: array.slice(start,end)
*/
let slicedFruits = fruits.slice(2,5);
console.log("Fruits before sliced: ", fruits);
console.log("Fruits after sliced: ", slicedFruits);  [ 'Grapes', 'Apples', 'Watermelon' ]

/*
    splice() Adds and removes elements from Array  from anywhere
    syntax array.splice(start,deletecount, item1, item2.....itemN)
*/
console.log("Fruits before spliced: ", fruits);
let splicedFruites = fruits.splice(0,5); //here 1 is staring index and 2 is the number of elements count
console.log("Removed Fruits: ",splicedFruites)
console.log("Fruits after spliced(only removing): ",fruits ) //[ 'Papaya', 'Orange' ]

// Adding elemnts in splice
fruits.splice(1,0,"Chikoo","Pineapple")
console.log("After addition splice(Not removed but added): ", fruits) //[ 'Papaya', 'Chikoo', 'Pineapple', 'Orange' ]

fruits.splice(1,2,"Mango","Cherry")
console.log("After deletion and then addition splice(both remove and added): ", fruits); // [ 'Papaya', 'Mango', 'Cherry', 'Orange' ]

/*
    indexOf() - Find index of specific element, if element not found, return -1
    syntax array.indexOf(searchElement) or array.indexOf(searchElement, startingIndex)
*/
let cherryIndex = fruits.indexOf("Cherry");
console.log("Index of cherry: ",cherryIndex);

let notFoundFruits = fruits.indexOf("Promegranate");
console.log("Fruits not found: ", notFoundFruits); //-1

let cherryIndexes = fruits.indexOf("Cherry",2);
console.log("Index of cherry: ",cherryIndexes);

/*
    includes() check if element exists
    syntax array.includes(searchElement, fromIndex)
*/
let isPromegranateExists = fruits.includes("Promegranate");
console.log("Promegranate Exists: ", isPromegranateExists) //false

let isCherryExists = fruits.includes("Cherry");
console.log("Cherry Exists: ", isCherryExists);

/*
    toString() converts array to string
    syntax array.toString()
 */
let numberStrings = numbers.toString();
console.log("Converted Array to String: ", numberStrings);

let welcomeArray:string[] = ['w','e','l','c','o','m','e'];
console.log("Origeinal Array: ", welcomeArray);

let str:string = welcomeArray.toString();
console.log("String converted Array: ", str); //w,e,l,c,o,m,e