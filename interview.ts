const input = "abbcccddd";
const charCount = new Map<string,number>();
for(const char of input){
    charCount.set(char,(charCount.get(char) ||0)+1);
}
charCount.forEach((count,char)=>{
    console.log(`${char}->${count}`);
});
