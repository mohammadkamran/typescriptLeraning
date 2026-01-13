/*
    Strings - Text value or combination of characters
    single quote - 'Hello World';
    double quote - "Hello World";
    backtick(``) - `Hello World`;

    ondex in string starts with 0
*/

//Declaration

let singleQuote:string = 'Hello single quote';
let doubleQuote:string = "Hello double quote";
let backtickQuote:string = `Hello backtick`;

console.log('String with single quote: ', singleQuote);
console.log("String with double quote: ", doubleQuote);
console.log(`String with backtick quote:  ${backtickQuote}`); // use of backstick

let str:string = "Hello Typescript";

//to lowercase
console.log(`${str} to lower case `,str.toLowerCase());

//to uppercase
console.log(`${str} to lower case `,str.toUpperCase());

//find length
console.log(`${str} length is: `,str.length);

//charAt() & indexOf(string)
console.log(`${str} char at 4th index is: `,str.charAt(4)); //o
console.log(`${str} index of type: `,str.indexOf("Type")); //6

//substring()
console.log(str.substring(0,5)); // Hello Typescript===> Hello 

//includes
console.log(str.includes("Hello")); //true
console.log(str.includes("hello")); //false since string values are case sensitive

//startsWith() & endsWith()
console.log(str.startsWith("Hello")); true
console.log(str.startsWith("hello")); false
console.log(str.endsWith("Typescript")); true
console.log(str.endsWith("OK")); false

//replace()
console.log(`${str} after replaced with World is: `,str.replace("Typescript","World")); //Hello World

//split() -- break strings into multiple parts based on the delimeter and returns an array
let words:string[]=str.split(" ");
console.log("After split: ", words)

let myString:string = "md.kamran2k6@gmail.com, password";
let arr:string[]= myString.split(", ");
console.log("email: ", arr[0]); // md.kamran2k6@gmail.com
console.log("password: ", arr[1]); //password

//trim() & trimStart() & trimEnd();

let newWord = "    I love typescript.        ";
console.log(`${newWord} after trim:`,newWord.trim()); //I love typescript.
console.log(`${newWord} after start trim:`,newWord.trimStart()); // removes spaces from start only
console.log(`${newWord} after end trim:`,newWord.trimEnd()); // removes spaces from ends only

//concat
let str1 = "hello";
let str2 = " world";
console.log("String concat: ", str1.concat(str2));
console.log("Welcome".concat(" to concat string"));
let str3 = " typescript";
console.log("multiple concat: ", str1.concat(str2).concat(str3));

//concepts of string immutability (cann't change the original value)
let num:number = 10;
let result:number = num + 5;
console.log(result);
console.log("original number: ",num);

let str4:string = "hello string is immutable";
let modifiedString:string = str4.concat(" and can be modified only.")
console.log("modified string is: ", modifiedString);
console.log("original string: ", str4);

//multiple lines is possible only through backtick

let str5:string = `hello
                        welcome
                                to
                                     multilines`;
console.log("multi lines with backtick: ", str5)


