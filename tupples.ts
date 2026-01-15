/*
    Tuples in Typescripts
    - A tupple is a fixed length array where each element has a specific data type
    - It helps in storing multiple fields of different data types together
*/

//Tupples with 2 values string. numbers
let person: [string, number] = ["John", 1];
console.log(person[0]);
console.log(person[1]);

//Tupples with multiple values
let user: [number, string, boolean, number, string] = [
  1,
  "Kerry",
  true,
  2,
  "John",
];
console.log("Tupples with multiple values: ", user);

//Iterating over a tupple using a traditional for loop
for (let i = 0; i < user.length; i++) {
  console.log("Extarct tupple using for loop: ", user[i]);
}

//Extract values using for in loop
console.log("Extarcting tupple values using forin loop.........");
for (let i in user) {
  console.log(user[i]);
}

//Extract values using for of loop
console.log("Extarcting tupple values using forof loop...........");
for (let values of user) {
  console.log(values);
}

// Tupple Arrays(Array of tupples)
let students:[number,string][] = [[101,"John"],[102,"Smith"],[103,"Alen"],[104,"Kerry"]];
console.log(students.length);
console.log(students[0]); //extract specific tupple
let tp = students[0];
console.log(tp[0]); // 101  -extarcting arrays values in tupples
console.log(tp[1]); // John -extarcting arrays values in tupples
