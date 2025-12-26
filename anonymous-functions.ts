/*
    Anonymous functions are the functions without name, instead it's assigned to a variable, which acts as its name.

    syntax
    let variable = function(parameter){
        function body
    }
        variable();
*/

//Anonymous functions

let message = function (): string {
  return "Hello Anonymous functions";
};
console.log(message());

//Anonymous functions with parameters

let multiply = function (a: number, b: number) {
  return a * b;
};
console.log("Anonymous functions with parameters ", multiply(5, 2));
