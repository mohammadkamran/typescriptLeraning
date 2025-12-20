//if condition
//@ts-ignore
let age: number = 20;
if (age > 18) {
  console.log("Adult");
}

//if else condition
let number: number = 15;
if (number % 2 == 0) {
  console.log(`${number} is Even`);
} else {
  console.log(`${number} is Odd`);
}

//if else if condition

let marks: number = 42;
if (marks >= 90 && marks <= 100) {
  console.log("Grade A");
} else if (marks >= 75 && marks <= 90) {
  console.log("Grade B");
} else if (marks >= 60 && marks <= 75) {
  console.log("Grade C");
} else if (marks >= 40 && marks <= 60) {
  console.log("Grade D");
} else {
  console.log("Fail");
}

let browser: string = "safari";
if (browser == "chrome") {
  console.log("Browser is chrome");
} else if (browser == "firefox") {
  console.log("Browser is firefox");
} else if (browser == "safari") {
  console.log("Browser is safari");
} else {
  console.log("Other browser is choosen");
}

//switch case

let days: number = 7;

switch (days) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("This is not a day");
    break;
}

//Switch statement with expression

//@ts-ignore
let m: number = 15,
  n: number = 5;
switch (m - n) {
  case 0:
    console.log("Result Zero");
    break;
  case 5:
    console.log("Result is five");
    break;
  case 10:
    console.log("Result is ten");
    break;
}
