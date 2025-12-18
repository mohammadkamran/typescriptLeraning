//var Vs let Vs const
/*
    1) Scope
    2) Declaration
    3) Redeclaration
    4) Reassignment
    5) Hoisting

    //var: We don't use this in modern js/ts. Avaoid var as it has function scope and lead to unexpected behaviour. And it has a function scope.
    //let: use when we want to reaassign value to a variable. And it has block scope.
    //const: use when we don't want to reassign the value to a variable. And it has block scope.
*/
//scope===> functional scope and block scope

function variablesScope() {
  if (true) {
    var varMessage: string = "Hello var variable";
    console.log(varMessage + " inside block");
    let letMessage: string = "Hello let variable";
    console.log(letMessage + " inside block");
    const constMessage: string = "Hello const variable";
    console.log(constMessage + " inside block");
  }
  console.log(varMessage + " outside block");
  //console.log(letMessage + " outside block"); // not accessible here because let has block scope
  //console.log(constMessage + " outside block"); // not accessible here because const has block scope
}
variablesScope();
