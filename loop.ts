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

for(let i6=10;i6>=1;i6--){
    console.log(i6);
}

let i7:number; //global variable
for(i7=1;i7<=5;i7++){//now the i7++ makes i7=6 as here i7 without let is global variable
    console.log(i7); //print 1,2,3,4,5
}
console.log(i7);//so here i7=6

//break

for(let i8=0;i8<=10;i8++){
    if(i8==7){
        break;
    }
    console.log("break check", i8)
}

//continue is also called jumping

for(let i9=0;i9<=10;i9++){
    if(i9==7){
        continue;
    }
    console.log("continue check",i9)
}

for(let i10=0;i10<=10;i10++){
    if(i10==1 || i10==3 || i10==5 || i10==7 || i10==9){
        continue;
    }
    console.log("continue with or operator",i10)
}