//While loop executes as long as the condition is true
let i:number =1;
while(i<=10){
    console.log(i);
    i++
}

// print odd and even between 1 to 100
//@ts-ignore
i:number=1;
while(i<=100)
{
    if(i%2===0)
    {
        console.log(`${i} is even`);
    }else
    {
        console.log(`${i} is odd`)
    }
    i++;
}

let x:number=2;
while(x<=100)
{
    console.log(`${x} is even`);
    x+=2;
}

let y:number=1;
while(y<=100)
{
    console.log(`${y} is odd`);
    y+=1;
}

let z:number=100;
while(z>=0)
{
    console.log(z)
    z--;
}

//do while loop : Executes atleast once before checking the condition.

/*
    do
    {
        statements;
    }while(conditions);

*/

let i1:number=1;
do{
    console.log(i1);
    i1++;
}while(i1<=10);

let i2:number=20;
do{
    console.log(i2);
    i2--;
}while(i2>=0);

//forloop: is used when the number of iterations are known beforehands.

for(let i3=0;i3<=10;i3++){
    console.log(i3);

}

for(let i4=2;i4<=20;i4+=2){
    console.log(`Even numbers are: ${i4}`)
}

for(let i5=0;i5<=30;i5++){
    if(i5%2===0){
        console.log(i5);
    }
}