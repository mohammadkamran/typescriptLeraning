const arr:number[] = [10,30,20,40,50,10,20];

const uniqueValues = arr.filter((num)=>arr.indexOf(num) === arr.lastIndexOf(num));
console.log(uniqueValues);
