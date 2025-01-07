function calculateSum(...numbers){
    var sum=0
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}
let res=calculateSum(10,20,30);
console.log(res);