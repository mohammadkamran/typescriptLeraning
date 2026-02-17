/*
string1 = "kartik"
string2 = "patel"
*/

let string1:string = "kartik";
let string2:string = "patel"
string1 = string1 + string2;
string2 = string1.substring(0,string1.length - string2.length);
string1 = string1.substring(string2.length);

console.log(string1);
console.log(string2);
