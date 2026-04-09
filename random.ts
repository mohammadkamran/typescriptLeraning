function varScope(){
    if(true){
        var x = "Hello World";
        console.log(x); // Output: Hello World
    }
    console.log(x); // Output: Hello World (var is function-scoped)
}

varScope();

function letScope(){
    if(true){
        let y = "Hello World";
        console.log(y); // Output: Hello World
    }
    // console.log(y); // Error: y is not defined (let is block-scoped)
}
letScope();

function constScope(){
    if(true){
        const z = "Hello World";
        console.log(z); // Output: Hello World
    }
    // console.log(z); // Error: z is not defined (const is block-scoped)
}
constScope();