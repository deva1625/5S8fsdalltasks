
 let a=Promise.resolve(5)
 let b=Promise.resolve(10)
 let c=Promise.resolve(15)


let sum=0
 Promise.all([a,b,c]).then((array)=>{
       for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum+=element
       }
 }).catch((err)=>{
    console.log(err)

 }).finally(()=>{

     console.log(sum)
 });


